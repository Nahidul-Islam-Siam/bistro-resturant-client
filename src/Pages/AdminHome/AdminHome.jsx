import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AdminHome = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h2 className="text-3xl ">
            <span className="">
                Hi, Welcome   
             </span> 
            {
                user?.displayName ? user.displayName: 'Back'
            }
            </h2>
            
        </div>
    );
};

export default AdminHome;