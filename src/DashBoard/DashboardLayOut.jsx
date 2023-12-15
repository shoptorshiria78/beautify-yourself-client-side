import { NavLink, Outlet } from "react-router-dom";


const DashboardLayOut = () => {
    return (
        <div className="flex">
            <div className="w-64 px-4 py-2 ">
                <ul>
                    <li><NavLink to='/dashboard/myCart'>My Cart</NavLink></li>
                </ul>

            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayOut;