
import { useLoaderData } from "react-router-dom";
import ShowProducts from "../ShowProducts/ShowProducts";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";


const Products = () => {

    const loadedProducts = useLoaderData();

    return (
        <div>
            <NavBar></NavBar>
            
            <div className=" max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                
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
    );
};

export default Products;