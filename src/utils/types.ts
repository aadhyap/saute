import { Timestamp } from "firebase/firestore";

// types.ts
export default interface AppUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    firstName: string | null;
    lastName: string | null;
    photoURL: string | null;
    roles: string[] | null; // user | admin
    lastLogin: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}