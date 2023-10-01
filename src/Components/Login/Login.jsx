import { Link, Navigate, useNavigate } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { BiShowAlt } from 'react-icons/bi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';




const Login = () => {
  const [showPassword, setShowPassword] = useState(true)
  const navigate = useNavigate()
   
    const {loginUser} = useAuth()
    const handleLOgin = e =>{
        e.preventDefault();
        const email = e.target.email.value 
        const password = e.target.password.value
        console.log(email, password);

        loginUser(email, password)
        .then(res => {
            console.log(res.user)
            toast.success('Login successful')
            navigate('/')
            
            e.target.reset();
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    const handleShowPassword = () => {
      console.log('show password');
      setShowPassword(!showPassword)
    }

  return (
    <div className="hero   min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="relative card-body">
            <form  onSubmit={handleLOgin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={ showPassword?   "password" : 'text' }
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                
                
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="mt-2">
              <p>
                Already Have An Account{" "}
                <Link to="/register">
                  <span className="hover:underline text-blue-600">
                    Register Here
                  </span>
                </Link>{" "}
              </p>
            </div>
            <SocialLogin/>
            {
                    showPassword? <>
                    <button onClick={handleShowPassword} className="absolute text-xl mt-[134px] ml-60"><BiShowAlt></BiShowAlt></button>
                    </> : <>
                    <button onClick={handleShowPassword} className="absolute text-xl mt-[134px] ml-60"><AiOutlineEyeInvisible></AiOutlineEyeInvisible></button>
                    </>
                }
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
