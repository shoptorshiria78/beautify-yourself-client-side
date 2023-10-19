import {  useLoaderData } from "react-router-dom";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import Swal from "sweetalert2";


const ProductDetails = () => {
    
    const productDetails = useLoaderData();
   
    const handleMyCart =()=>{
        fetch("http://localhost:5000/myCart", {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
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
            <div className="max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto my-10 ">
                
                    <div><img className="w-full h-[80vh] mb-10" src={productDetails.image} alt="" /></div>
                    <h1 className="text-4xl font-extrabold">{productDetails.name}</h1>
                    <p className="mt-5 text-[#46454599]">{productDetails.description}</p>

                    <p className="text-[#43a056] font-bold mt-5 text-lg"> Price: {productDetails.price} $</p>

                    <button onClick={handleMyCart} className="px-6 py-3 rounded bg-[#43a056] text-white my-5">Add to cart</button>

                
            </div>

            
        </div>
    );
};

export default ProductDetails;