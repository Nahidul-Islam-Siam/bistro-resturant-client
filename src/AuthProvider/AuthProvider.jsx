/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const  AuthContext= createContext(null)


// social auth provider
const  googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()


 
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const axiosPublic =useAxiosPublic()
const [loading, setLoading] = useState(true)
console.log(user);
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}


const loginUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// google login
const googleLogin  =()=>{
    setLoading(true)
 return  signInWithPopup(auth,  googleProvider)
}

// github login
const githubLogin = () =>{
    setLoading(true)
return signInWithPopup(auth,  githubProvider)
}

// update profile
const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}


// logout
const logout = () =>{
    
    setUser(null)
    signOut(auth)
}

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if (currentUser) {
            // get token and store client
            const userInfo = { email: currentUser.email };
            axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
        }
        else {
            // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
            localStorage.removeItem('access-token');
        }
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
}, [axiosPublic])



    const authInfo ={
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        loading,
        updateUserProfile
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}> 
                 {children}
                 </AuthContext.Provider>
          
        </div>
    );
};

export default AuthProvider;