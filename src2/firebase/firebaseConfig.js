import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDCG_CETk4DaCcd3u0bMoQK-0XO5SdWTZ4",
    authDomain: "tailwind-6e448.firebaseapp.com",
    projectId: "tailwind-6e448",
    storageBucket: "tailwind-6e448.appspot.com",
    messagingSenderId: "140754957943",
    appId: "1:140754957943:web:4e36ea527d16570af6b872"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
