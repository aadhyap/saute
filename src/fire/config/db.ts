// @ts-nocheck
import { getFirestore } from "firebase/firestore";
import firebase_app from "./index";
const db = getFirestore(firebase_app);
export default db;
