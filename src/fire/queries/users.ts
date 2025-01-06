// fire/queries/users

import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebase_app from "@/fire/config";
import AppUser from "@/utils/types";

const db = getFirestore(firebase_app);

// Retrieve all users from Firestore
export const getAllUsers = async () => {
    try {
        const usersCollection = collection(db, "users");
        const querySnapshot = await getDocs(usersCollection);
        const users: AppUser[] = [];

        querySnapshot.forEach((docSnap) => {
            users.push(docSnap.data() as AppUser);
        });

        return users;
    } catch (error) {
        console.error("Error retrieving users data:", error);
        return [];
    }
};
