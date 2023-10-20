import { useLoaderData } from "react-router-dom";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import SingleCart from "../SingleCart/SingleCart";
import {  useState } from "react";
import Swal from "sweetalert2";



const MyCart = () => {

    const myCartDatas = useLoaderData();
    const [cartDataOrdered, setCartDataOrdered] = useState(myCartDatas)
   
    if(!cartDataOrdered){
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have not added any product yet',
            footer: '<a href="/">Why do I have this issue?</a>'
          })
    }

    return (
        <div className="bg-purple-100 py-10" >
            <NavBar></NavBar>
            <div className="max-w-[1100px] mx-3 md:mx-4 lg:mx-auto mt-12 gap-2 ">              
                    <div >
                        <div className=" w-[400px] md:w-[470px] lg:w-[1000px] mx-auto grid grid-cols-2 gap-3">
                            {
                                cartDataOrdered.map((cartData) =>
                                  <SingleCart
                                    key={cartData._id}
                                    cartData={cartData}
                                    cartDataOrdered={cartDataOrdered}
                                    setCartDataOrdered={setCartDataOrdered}
                                     ></SingleCart>   
                                )     
                            }
                        </div>
                    </div>            
            </div>
        </div>
    );
};

export default MyCart;