import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate()
  const { googleLogin, githubLogin } = useContext(authContext);
  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        navigate('/')
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="divider">Conitune With</div>
      <div className="flex justify-between">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-ghost"
        >
          <FcGoogle className="text-2xl"></FcGoogle> Google 
        </button>
        
        <button
        onClick={() => handleSocialLogin(githubLogin)}
        className="btn btn-ghost"><BsGithub className="text-2xl"></BsGithub> Github</button>
      </div>
    </>
  );
};

export default SocialLogin;
