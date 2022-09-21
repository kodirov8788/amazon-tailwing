import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState([])
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        });
    }, [])
    // console.log(currentUser);
    return (
        <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
    )
}