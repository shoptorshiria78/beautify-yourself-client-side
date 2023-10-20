import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    

    const register = (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword( auth, email, password);

    };
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    };

    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = { user, register, signIn, logOut, googleLogIn, loading}
    // console.log("authprovider", user?.email)

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes ={
    children : PropTypes.node
}

export default AuthProvider;