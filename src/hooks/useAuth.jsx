import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";


const useAuth = () => {
    const all = useContext(authContext)
    return  all;
};

export default useAuth;