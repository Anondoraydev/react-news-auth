import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [lodding, setLodding] = useState(true);


    const createUser = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLodding(true)
        return signOut(auth);
    }


    useState(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('use in the auth stead change', currentUser);
            setUser(currentUser)
            setLodding(false)
        })
        return () => {
            unSubscribe() 
        }
    }, [])
    const authInfo = {
        user,
        lodding,
        createUser,
        logOut,
        singIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;