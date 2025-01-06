// @ts-nocheck
import {
    useContext,
    createContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    UserCredential,
} from "firebase/auth";
import auth from "@/fire/config/auth";
import { createUserIfNotExists } from "@/fire/queries/createUserIfNotExists";
import { updateLastLogin } from "@/fire/queries/updateLastLogin";

import AppUser from "utils/types";
import { saveUserData } from "@/fire/queries/user";
import { useToast } from "@chakra-ui/react";

type ProviderProps = {
    children: React.ReactNode;
};

interface AuthContextType {
    user: AppUser | null;
    setUser: Dispatch<SetStateAction<AppUser | null>>;
    isUserLoading: boolean;
    saveUser: (updatedUser: AppUser) => Promise<void>;
    setIsUserLoading: Dispatch<SetStateAction<boolean>>;
    googleSignIn: () => Promise<UserCredential>;
    logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<AppUser | null>(null);
    const [isUserLoading, setIsUserLoading] = useState(true);
    const toast = useToast();

    const saveUser = async (updatedUser: AppUser) => {
        try {
            // Update user data in Firestore
            await saveUserData(updatedUser);
            // Update local state
            setUser(updatedUser);

            toast({
                title: "User Update",
                description: "Your user was successfully updated!",
                status: "success",
                duration: 4000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error saving user data:", error);
        }
    };

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const logOut = async () => {
        return signOut(auth).then(() => setUser(null)); // Ensure user state is reset on sign out
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const appUser = await createUserIfNotExists(currentUser);
                console.log("user", appUser);

                // Update lastLogin field regardless of whether the user was created or just logged in
                await updateLastLogin(currentUser.uid);

                setUser(appUser);
            } else {
                setUser(null);
            }
            setIsUserLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                saveUser,
                isUserLoading,
                setIsUserLoading,
                googleSignIn,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
};
