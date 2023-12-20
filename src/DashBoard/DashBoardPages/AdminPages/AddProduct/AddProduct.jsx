import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSecure from "../../../../AxiosInterfaces/useAxiosSecure";


const AddProduct = () => {
    const axiosSecure = useAxiosSecure()

    const handleAdd = (event) => {

        event.preventDefault();

        const form = event.target;
        const brand = form.brand.value;
        const name = form.name.value;
        const price = form.price.value;
        const type = form.type.value;
        const image = form.image.value;
        const description = form.description.value;
        const rating = form.rating.value;

        console.log(brand, name, price, type, image, description, rating)
        const product = { brand, name, price, type, image, description, rating }

        axiosSecure.post("/product", product)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Product Updated',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }

            })


    }


    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? 'bg-black' : 'bg-gradient-to-r from-fuchsia-400 to-fuchsia-100'}  py-5`} >
            <div className=" py-20 " >
                <div className="flex mx-auto justify-around items-center">
                    <h1 className="text-3xl text-center text-white my-3 ">Add Product</h1>
                    <input onClick={toggleDarkMode} type="checkbox" className="toggle toggle-error w-10 md:w-12" />
                </div>
                <form onSubmit={handleAdd} className="space-y-2 w-4/6 mt-3 mx-auto mb-4">
                    <div className="flex justify-center items-center gap-3 w-full ">
                        <div className="flex-1 ">
                            <label className="label">
                                <span className="label-text text-white">Brand Name</span>
                            </label>
                            <input placeholder="Brand Name" className="p-2 w-full  " type="text" name='brand' />
                        </div>
                        <div className="flex-1 ">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input placeholder="Name" className="p-2 w-full " type="text" name='name' />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3 w-full">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white">Type</span>
                            </label>
                            <input placeholder="Type" className="p-2  w-full " type="text" name='type' />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <input placeholder="Price" className="p-2 w-full " type="text" name='price' />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3 w-full">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white">Short Description</span>
                            </label>
                            <input placeholder="Short Description" className="p-2 w-full " type="text" name='description' />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <input placeholder="Rating" className="p-2 w-full " type="text" name='rating' />
                        </div>
                    </div>

                    <label className="label">
                        <span className="label-text text-white">Image</span>
                    </label>
                    <input placeholder="Image" className="p-2  w-full " type="text" name='image' />
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input className="p-2 w-full bg-fuchsia-600 text-white" type="submit" value="ADD" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;