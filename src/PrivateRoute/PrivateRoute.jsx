import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {


    const {user, loading} = useAuth()


    //we must wait here for the loading
    if(loading) return <>
    <div className="flex mt-52  justify-center items-center">
    <div>
    <span className="loading loading-spinner loading-lg"></span>
    </div>
    <div></div>
    </div>
    

    </>

    if(!user?.email){
       
        return <Navigate to='/login'></Navigate>
    }

return children;
    
};

export default PrivateRoute;