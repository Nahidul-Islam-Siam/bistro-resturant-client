/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const  AuthContext= createContext(null)


// social auth provider
const  googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()


 
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)

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

// observer
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
            setLoading(false)
        setUser(currentUser)
   console.log('current user', currentUser);
      });
      return () => unsubscribe()
},[])



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