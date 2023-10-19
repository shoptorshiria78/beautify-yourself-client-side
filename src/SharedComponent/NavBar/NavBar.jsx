// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    // const {  logOut } = useContext(AuthContext);
    // const handleLogOut = () => {
    //     logOut()
    //         .then()
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    const Nav = <div className=" space-x-3 text-base">
        <NavLink to='/' style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>Home</NavLink>
       {
        // user && 
        <>
         <NavLink to='/myCart' style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>My Cart</NavLink >
        <NavLink to='/addProduct' style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : " black ",
            };
        }}>Add Product</NavLink >
        </>
       }
        
    </div>

    return (
        <div className="navbar mt-5 text-r rounded-xl px-12 shadow-xl bg-[#f0d1d824] max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                        {
                            Nav
                        }
                    </ul>
                </div>
                <div>
                    <div className="text-xl md:text-3xl font-bold text-[#E55473]">Corporate</div>
                    <div className="text-base md:text-xl text-red-400 "><span className="text-2xl font-bold text-red-500 ">A</span>musement</div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        Nav
                    }

                </ul>
            </div >
            {/* <div className="navbar-end">
                {
                    user ?
                        <div className="flex justify-between items-center">
                            <div className="mr-2">
                               <img className="w-8 md:w-12 h-8 md:h-12 rounded-full border-2 border-[#E55473]" src={user?.photoURL} alt="" />
                                <p>{user?.displayName}</p>
                            </div>
                            <Link onClick={handleLogOut} to='/'
                                className=" bg-[#E55473] text-white px-3 lg:px-5 py-2 rounded">Sing Out </Link>
                        </div>
                        : <div >
                            <Link to='/login'
                                className=" bg-[#E55473] text-white px-5 py-2 rounded">Log In </Link>
                        </div>
                }
            </div> */}
        </div>
    );
};

export default NavBar;