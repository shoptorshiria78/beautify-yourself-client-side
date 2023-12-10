import { Outlet } from "react-router-dom";
import Footer from "../SharedComponent/Footer/Footer";



const MainLayOut = () => {

    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;