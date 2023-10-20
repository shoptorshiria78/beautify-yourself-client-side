import NavBar from "../NavBar/NavBar";
import PropTypes from 'prop-types';

const Banner = ({toggleDarkMode}) => {
    return (
        <div className="relative ">
           
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/1qNJLB2/cosmetic-banner.webp)' }}>
                <div className=""></div>

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                        <h1 className="mb-5 mt-32 md:mt-28 text-5xl font-bold text-fuchsia-500">Discover Your Radiance: Beauty Unveiled</h1>
                        
                        <p className="mb-5 text-fuchsia-400">Elevate Your Beauty Experience with Our Premium Cosmetics Collection. Explore a World of Elegance and Self-Expression.</p>
                        <button className="px-4 py-2 bg-fuchsia-700 text-white rounded">Get Started</button>
                    </div>
                </div>
            </div>
            
           
           <div className="absolute top-3  w-full">
           <NavBar toggleDarkMode={toggleDarkMode}></NavBar>
           </div>
           
            
        </div>
    );
};

Banner.propTypes = {

    toggleDarkMode: PropTypes.func,

}
export default Banner;