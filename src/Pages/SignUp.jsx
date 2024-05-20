import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm()
    const {createUser} = useContext(AuthContext)
      const onSubmit = (data) =>{
        console.log(data)

      } 
    

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
            </form>
          </div>
        </div>
      </div></>
    );
};

export default SignUp;