
import { useLoaderData } from "react-router-dom";
import ShowProducts from "../ShowProducts/ShowProducts";
import Swal from "sweetalert2";
import Slider from "../Slider/Slider";
import { useState } from "react";


const Products = () => {

    const loadedProducts = useLoaderData();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode? 'bg-black':''}`}>
            
            <Slider toggleDarkMode={toggleDarkMode}></Slider>

            <div className=" max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto bg-white p-8 ">
            
                <div className=" mt-[900px] md:mt-[600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    {
                        loadedProducts.length > 0 ?
                            loadedProducts.map(loadedProduct =>
                                <ShowProducts key={loadedProduct._id}
                                    loadedProduct={loadedProduct}>
                                </ShowProducts>) :
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'There is no product here',
                                footer: '<a href="/">Go to Home</a>'
                            })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;