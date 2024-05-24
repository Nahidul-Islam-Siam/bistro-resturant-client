import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../Component/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
    reset,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate();
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const onSubmit = data => {
      console.log(data);
      createUser(data.email, data.password)
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserProfile(data.name, data.photoURL)
                  .then(() => {
                    // create user entry in the database
                    const userInfo= {
                        name:data.name,
                        email:data.email
                    }
                    axiosPublic.post('/users',userInfo)
                    .then(res=>{
                      if(res.data.insertedId){
                        console.log('user added to the database')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                      }
                    })
                  

                  })
                  .catch(error => console.log(error))
          })
  };


    return (
   <>
   <Helmet>
    <title>Bistro Boss | Sign Up</title>
   </Helmet>

        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" 
                 {...register("name",{ required: true })}className="input input-bordered" />
                  {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" 
                 {...register("email", { required: true })}className="input input-bordered" />
                   {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" 
                 {...register("password", { required: true })}
                 name="password"
                className="input input-bordered" />
                  {errors.password && <span>This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Sign Up"
                className="btn btn-primary"/>
              </div>
            <a href="">Already user?  <Link to='/login'>login</Link></a>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div></>
    );
};

export default SignUp;