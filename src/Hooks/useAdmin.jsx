import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
   
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data:isAdmin, isPending:isAdminLoading} = useQuery({
        queryKey:["isAdmin"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;