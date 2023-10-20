import { useLoaderData } from "react-router-dom";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import Swal from "sweetalert2";
import { MdLocationOn } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";



const ProductDetails = () => {

    const productDetails = useLoaderData();

    const handleMyCart = () => {
        fetch("http://localhost:5000/myCart", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your product has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }

    return (
        <div>
            <NavBar></NavBar>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto  ">
                <div className="my-10 col-span-1 md:col-span-2 bg-fuchsia-100 ">
                    <div className="flex p-4">
                        <img className="w-[300px] h-[60vh] my-4  bg-white" src={productDetails.image} alt="" />
                        <div className="ml-4 flex items-center " >
                            <div>
                                <h1 className="text-4xl text-purple-600 font-extrabold">{productDetails.name}</h1>
                                <p className="mt-5 text-purple-300">{productDetails.description}</p>
                                <p className="text-purple-600 font-bold mt-5 text-lg"> Price: {productDetails.price} $</p>

                                <button onClick={handleMyCart} className="px-6 py-3 rounded bg-purple-600 text-white my-5">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" p-12 rounded w-[400px] md:w-[250px] lg:w-[300px] bg-violet-100 mt-16">
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
                </div>

            </div>

        </div>
    );
};

export default ProductDetails;