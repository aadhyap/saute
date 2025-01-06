import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase_app from "@/fire/config";
const db = getFirestore(firebase_app);

export async function updateLastLogin(userId: string) {
    const userRef = doc(db, "users", userId);

    try {
        await updateDoc(userRef, {
            lastLogin: Timestamp.fromDate(new Date()),
        });
        console.log("Last login updated successfully");
    } catch (error) {
        console.error("Error updating last login:", error);
    }
}
