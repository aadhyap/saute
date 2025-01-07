import { collection, addDoc, getFirestore } from "firebase/firestore";
import firebase_app from "@/fire/config";
const db = getFirestore(firebase_app);


export default async function createEmail(email: any) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, "emails"), { email: email });
    } catch (e) {
        error = e;
    }

    return { result, error };
}
