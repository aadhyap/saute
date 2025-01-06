// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3d_v3UnOTrsW9ZfRcf73bd53C_hh2vB4",
    authDomain: "saute-cd8ac.firebaseapp.com",
    projectId: "saute-cd8ac",
    storageBucket: "saute-cd8ac.firebasestorage.app",
    messagingSenderId: "664761387858",
    appId: "1:664761387858:web:e3b21b5852c3c3a3a2488b",
    measurementId: "G-FCSM1X9KT0"
};

// Initialize Firebase
let firebase_app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
