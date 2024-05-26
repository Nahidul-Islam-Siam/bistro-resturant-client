/* eslint-disable react/prop-types */
import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import {  } from 'react-loader-spinner'
// import LoadingSpinner from "../components/LoadingSpinner";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location= useLocation()


if(loading){
return <progress className="progress w-56"></progress>
}


   if (!user) {
    return <Navigate to='/login' state={location?.pathname || '/'}/>
   }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;