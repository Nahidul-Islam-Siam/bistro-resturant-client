import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";


import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            })
        })
    }

    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;