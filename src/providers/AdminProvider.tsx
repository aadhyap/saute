import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
} from "react";
import { useAuth } from "./AuthProvider";
import { useDisclosure } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { getAllUsers } from "@/fire/queries/users";
import User from "@/utils/types";
import AppUser from "@/utils/types";

import { updateUserData } from "@/fire/queries/user";

// Define the shape of the context data
interface AdminContextType {
    selectedUser: User | null;
    setSelectedUser: React.Dispatch<any>;
    isUserDrawerOpen: boolean;
    onUserDrawerOpen: () => void;
    onUserDrawerClose: () => void;
    updateUserByAdmin: (uid: string, updatedData: Partial<User>) => Promise<void>;
    users: User[];
    isFetchingAdminUsers: boolean;
    fetchAllUsers: () => void;
}

// Create a context with a default value of undefined
const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Define props for the AdminProvider component
interface AdminProviderProps {
    children: ReactNode;
}

// The AdminProvider component
export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
    const toast = useToast();

    const { user } = useAuth();
    const [selectedUser, setSelectedUser] = useState<AppUser | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [isFetchingAdminUsers, setIsFetchingAdminUsers] = useState(false);

    const {
        isOpen: isUserDrawerOpen,
        onOpen: onUserDrawerOpen,
        onClose: onUserDrawerClose,
    } = useDisclosure();

    const updateUserByAdmin = async (uid: string, updatedData: Partial<User>) => {
        if (!user || !uid) {
            toast({
                title: "Authentication Error",
                description: "User is not authenticated.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        // update function
        await updateUserData(uid, updatedData);

        // refetch all users
        fetchAllUsers();
    };

    const fetchAllUsers = async () => {
        setIsFetchingAdminUsers(true);
        const getUsers = await getAllUsers();
        setUsers(getUsers);
        setIsFetchingAdminUsers(false);
        console.log("all users", getUsers);
    };

    return (
        <AdminContext.Provider
            value={{
                selectedUser,
                setSelectedUser,
                isUserDrawerOpen,
                onUserDrawerOpen,
                onUserDrawerClose,
                updateUserByAdmin,
                users,
                isFetchingAdminUsers,
                fetchAllUsers,
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};

// Custom hook to use the AdminContext
export const useAdmin = (): AdminContextType => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error("useAdmin must be used within a AdminProvider");
    }
    return context;
};
