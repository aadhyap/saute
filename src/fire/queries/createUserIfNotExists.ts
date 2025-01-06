// fire/queries/createUserIfNotExists
// @ts-nocheck
import {
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    orderBy,
    limit,
    getDocs,
    getFirestore,
    serverTimestamp,
} from "firebase/firestore";
import { User as FirebaseUser } from "firebase/auth";
import firebase_app from "@/fire/config";
import AppUser from "utils/types";
const db = getFirestore(firebase_app);

/**
 * Creates a user document in Firestore if it does not already exist.
 * @param user The authenticated user object from Firebase Auth.
 */

export async function createUserIfNotExists(
    user: FirebaseUser
): Promise<AppUser> {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        // Safely split displayName into firstName and lastName
        const [firstName = "", ...lastNameParts] =
            user.displayName?.split(" ") || [];
        const lastName = lastNameParts.join(" "); // In case there are multiple parts in the last name

        const newUser: AppUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            photoURL: user.photoURL,
            roles: ["user"],
            lastLogin: serverTimestamp(),
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };
        await setDoc(userRef, newUser);
        console.log("User document created!");
        return newUser;
    } else {
        console.log("User already exists.");
        return docSnap.data() as AppUser; // Ensure the document data conforms to the AppUser type
    }
}
