import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const DashboardLayOut = () => {

    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    return (
        <div className="flex">
            <div className="w-64 px-4 py-2 bg-fuchsia-300 pt-10">
                <div className="flex bg-red-50 p-2 rounded my-4">
                    <img className=" w-8 h-8 md:w-16 md:h-16 bg-fuchsia-100" src="https://i.ibb.co/T40Xw2V/logo-for-skin-care.png" alt="" />
                    <div className="flex flex-col">
                        <div className="text-base md:text-3xl font-bold text-[#E55473]">Beautify</div>
                        <div className="text-sm md:text-xl text-red-400 "><span className="text-base font-bold text-red-500 ">Y</span>ourself</div>
                    </div>
                </div>
                <ul className="flex flex-col p-2">
                    {
                        isAdmin ? <>
                            <li className="my-2 bg-red-50 py-2 rounded text-center"><NavLink style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "fuchsia" : " red ",
                                };
                            }} to='/dashboard'>Admin Home</NavLink></li>

                            <li className="my-2 bg-red-50 py-2 rounded text-center"><NavLink style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "fuchsia" : " red ",
                                };
                            }} to='/dashboard/addProduct'>Add Product</NavLink></li>
                            <li className="my-2 bg-red-50 py-2 rounded text-center"><NavLink style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "fuchsia" : " red ",
                                };
                            }} to='/dashboard/updateProduct'>Update Product</NavLink></li>
                            <li className="my-2 bg-red-50 py-2 rounded text-center"><NavLink style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "fuchsia" : " red ",
                                };
                            }} to='/dashboard/updateProduct'>All User</NavLink></li>
                        </> : <>
                            <li className="my-2 bg-red-50 py-2 rounded text-center"><NavLink style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "fuchsia" : " red ",
                                };
                            }} to='/dashboard/myCart'>My Cart</NavLink></li>
                        </>
                    }
                     <div className="divider"></div>
                    <NavLink className="my-2 bg-red-50 py-2 rounded text-center" to='/' style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "fuchsia" : " red ",
                        };
                    }}>Home</NavLink>
                </ul>
            </div>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayOut;