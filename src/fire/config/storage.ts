import { getStorage } from "firebase/storage";
import firebase_app from ".";

const storage = getStorage(firebase_app);

export default storage;
