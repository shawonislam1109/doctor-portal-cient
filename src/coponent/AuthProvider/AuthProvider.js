import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOUt = () => {
        return signOut(auth);
    }
    const updateUser = (userInfo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, userInfo)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        });
        return () => unSubscribe();

    }, [])

    const authInfo = { user, createUser, singIn, LogOUt, updateUser, loader }
    return (
        <AuthContext.Provider value={authInfo}>
            return {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;