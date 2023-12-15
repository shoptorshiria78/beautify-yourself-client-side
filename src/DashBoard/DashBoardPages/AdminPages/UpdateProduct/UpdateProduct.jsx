import { useLoaderData } from "react-router-dom";
import NavBar from "../../../../SharedComponent/NavBar/NavBar";
import Swal from "sweetalert2";
import { useState } from "react";


const UpdateProduct = () => {

const loadedProduct = useLoaderData();
const {_id,brand, name, price, type, image, description, rating} = loadedProduct

    const handleUpdate =(event)=>{
           
        event.preventDefault();

       const form = event.target;
        const brand =form.brand.value;
        const name =form.name.value;
        const price =form.price.value;
        const type =form.type.value;
        const image =form.image.value;
        const description =form.description.value;
        const rating =form.rating.value;

        console.log(brand, name, price, type, image, description, rating)
        const product ={brand, name, price, type, image, description, rating }

        fetch(`http://localhost:5000/updateProduct/${_id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           
            if(data.modifiedCount > 0){
                
                Swal.fire({
                    title: 'Product Updated',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                 })
                 
            }
        })
        
    }

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode? 'bg-black':'bg-gradient-to-r from-fuchsia-400 to-fuchsia-100'} py-5`} >
            <NavBar toggleDarkMode={toggleDarkMode}></NavBar>
            <div className=" py-20 " >
                <h1 className="text-3xl text-center text-white my-3">Update Product</h1>
                <form onSubmit={handleUpdate} className="space-y-2 w-2/6 mt-3 mx-auto mb-4">
                    <label className="label">
                        <span className="label-text text-white">Brand Name</span>
                    </label>
                    <input defaultValue={brand} placeholder="Brand Name" className="p-2 w-full  " type="text" name='brand' />
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input defaultValue={name} placeholder="Name" className="p-2 w-full " type="text" name='name' />
                    <label className="label">
                        <span className="label-text text-white">Type</span>
                    </label>
                    <input defaultValue={type} placeholder="Type" className="p-2  w-full " type="text" name='type' />
                    <label className="label">
                        <span className="label-text text-white">Price</span>
                    </label>
                    <input defaultValue={price} placeholder="Price" className="p-2 w-full " type="text" name='price' />
                    <label className="label">
                        <span className="label-text text-white">Short Description</span>
                    </label>
                    <input defaultValue={description} placeholder="Short Description" className="p-2 w-full " type="text" name='description' />
                    <label className="label">
                        <span className="label-text text-white">Rating</span>
                    </label>
                    <input defaultValue={rating} placeholder="Rating" className="p-2 w-full " type="text" name='rating' />
                    
                    <label className="label">
                        <span className="label-text text-white">Image</span>
                    </label>
                    <input defaultValue={image} placeholder="Image" className="p-2  w-full " type="text" name='image' />
                    <label className="label">
                        <span className="label-text"></span>
                    </label>   
                    <input className="p-2 w-full bg-fuchsia-600 text-white" type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;