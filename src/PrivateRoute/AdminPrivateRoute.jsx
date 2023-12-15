import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";



const AdminPrivateRoute = (children) => {
   
    const [isAdmin, isAdminLoading] = useAdmin();
    const [user, loading] = useAuth();
    const location = useLocation();
    

    if(isAdminLoading || loading ){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminPrivateRoute;