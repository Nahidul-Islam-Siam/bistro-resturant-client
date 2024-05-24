import { useContext } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Login = () => {
  const {loginUser} = useContext(AuthContext)
// const captchaRef = useRef(null)
// const [disabled, setDisabled] = useState(true)
// useEffect(()=>{
//     loadCaptchaEnginge(6); 
// },[])


// const handleValidateCaptcha = () =>{
// const user_captcha_value = captchaRef.current.value
// if(validateCaptcha(user_captcha_value)){
// setDisabled(false)
// }
// else{
//     setDisabled(true)
// }
// }





const navigate = useNavigate()
const location = useLocation()
const from = location?.pathname  || '/'





const handleLogin = e =>{
  e.preventDefault()
 
  const email = e.target.email.value
  const password = e.target.password.value
 
  console.log(email,password);
  loginUser(email,password)
  .then((result) => {
   if(result.user){
    navigate(from)
    
   }
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}
    return (
       <>
        <Helmet>
    <title>Bistro Boss | Login</title>
   </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
               {/* <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                {/* <input type="text"
                ref={captchaRef} name="password" placeholder="type the capcha above" className="input input-bordered" required />
                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-primary btn-xs mt-2">Validate</button> */}
             
              {/* </div> */}
              <div className="form-control mt-6">
              <input
              //  disabled={disabled}
                type="submit" className='btn btn-primary'/>
              </div>
            </form>
          <p><small>New Here ?  <Link to='/signup'>Create an acoount</Link></small></p>
          </div>
        </div>
      </div></>
    );
};

export default Login;