import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({ routes }) => {

    const [user,setUser] = useState(null)

    const handleRegister = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin = (email,password) => {
        signInWithEmailAndPassword(auth,email,password)
    }
    const handleLogout = () => {
        signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth,googleProvider)
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)


            return () => {
                unsubscribe()
            }
        })
    }
    ,[])

    return <div>

        <authContext.Provider value={authInfo}>
        {routes}
        </authContext.Provider>

    </div>;
};

export default AuthProvider;
