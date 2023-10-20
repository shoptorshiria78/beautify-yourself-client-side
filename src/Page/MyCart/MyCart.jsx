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
        <div>
            <NavBar></NavBar>
            <div className="max-w-[1100px] mx-3 md:mx-4 lg:mx-auto mt-12 gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="col-span-1 md:col-span-2 lg:col-span-3 " >
                    <div >
                        <div className=" space-y-5 w-[400px] md:w-[470px] lg:w-[800px]">
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
                {/* <div>
                    <div className=" p-12 rounded w-[400px] md:w-[250px] lg:w-[300px] bg-violet-100 mt-4">
                        <h1 className="text-3xl py-5">Contact Info</h1>
                        <p className="flex items-center"><span className="mr-4 "><MdLocationOn className="w-5 h-5 text-cyan-500"></MdLocationOn></span>2912 Meadowbrook Road <br /> Los Angles, CA</p>
                        <p className="flex items-center"> <span className="mr-4"><TfiEmail className="w-5 h-5 text-cyan-500"></TfiEmail></span> corporateas@gmail.com</p>
                        <p className="flex items-center"> <span className="mr-4"><BsTelephoneFill className="w-5 h-5 text-cyan-500"></BsTelephoneFill></span> 310-386-1623</p>

                        <div className="grid py-5  grid-flow-col gap-4">
                            <a><FaFacebook className="w-5 h-5 text-cyan-500"></FaFacebook>
                            </a>
                            <a><FaGoogle className="w-5 h-5 text-cyan-500"></FaGoogle></a>
                            <a><FaGithub className="w-5 h-5 text-cyan-500"></FaGithub></a>
                            <a><AiOutlineTwitter className="w-5 h-5 text-cyan-500"></AiOutlineTwitter></a>
                            <a><AiFillLinkedin className="w-5 h-5 text-cyan-500"></AiFillLinkedin></a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default MyCart;