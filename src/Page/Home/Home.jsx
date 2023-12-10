
import { useState } from "react";
import Banner from "../../SharedComponent/Banner/Banner";
import Brand from "../../SharedComponent/Brand/Brand";
import Team from "../../SharedComponent/Team/Team";
import Usebenefits from "../../SharedComponent/Usebenefits/Usebenefits";



const Home = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode? 'bg-black':''}`}>
            <Banner toggleDarkMode={toggleDarkMode}></Banner>
            <Brand></Brand>
            <Team></Team>
            <Usebenefits></Usebenefits>
        </div>
    );
};

export default Home;