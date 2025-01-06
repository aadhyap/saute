import {
    doc,
    setDoc,
    getDoc,
    getFirestore,
    serverTimestamp,
} from "firebase/firestore";
import firebase_app from "@/fire/config";
import AppUser from "@/utils/types";

const db = getFirestore(firebase_app);

// Save user data to Firestore
export const saveUserData = async (user: AppUser) => {
    try {
        await setDoc(doc(db, "users", user.uid), { ...user });
    } catch (error) {
        console.error("Error saving user data:", error);
    }
};

export const updateUserData = async (
    uid: string,
    updatedData: Partial<AppUser>
) => {
    try {
        const userRef = doc(db, "users", uid);

        // Include updatedAt field in the update data
        const dataToUpdate = {
            ...updatedData,
            updatedAt: serverTimestamp(),
        };

        await setDoc(userRef, dataToUpdate, { merge: true });
    } catch (error) {
        console.error("Error updating user data:", error);
        throw new Error("Failed to update user data.");
    }
};

// Retrieve user data from Firestore
export const getUserData = async (uid: string) => {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data() as AppUser;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error retrieving user data:", error);
        return null;
    }
};
