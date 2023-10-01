import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../FireBase/firebase.config";

export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
    
  };

  //github login
  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  //register with password and email
  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //now  login with password and email
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //currently singed-in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  console.log(user);

  // useEffect(() => {
  //     const unsubsCribed = onAuthStateChanged(auth, (user) =>{
  //         setUser(user)
  //     })
  //     return () => {
  //         unsubsCribed()
  //     }
  // } ,[])

  //logout

  const logOut = () =>{
    return signOut(auth)
  }

  const authInfo = {
    googleLogin,
    githubLogin,
    createNewUser,
    loginUser,
    logOut,
    user,
    loading,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
