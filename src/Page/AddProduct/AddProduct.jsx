import NavBar from "../../SharedComponent/NavBar/NavBar";


const AddProduct = () => {

    const handleAdd =(event)=>{
           
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

        fetch("http://localhost:5000/product", {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    
    }

    return (
        <div className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-100 py-5">
            <NavBar></NavBar>
            <div className=" py-20 " >
                <h1 className="text-3xl text-center text-white my-3">Add Product</h1>
                <form onSubmit={handleAdd} className="space-y-2 w-2/6 mt-3 mx-auto mb-4">
                    <label className="label">
                        <span className="label-text text-white">Brand Name</span>
                    </label>
                    <input placeholder="Brand Name" className="p-2 w-full  " type="text" name='brand' />
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input placeholder="Name" className="p-2 w-full " type="text" name='name' />
                    <label className="label">
                        <span className="label-text text-white">Type</span>
                    </label>
                    <input placeholder="Type" className="p-2  w-full " type="text" name='type' />
                    <label className="label">
                        <span className="label-text text-white">Price</span>
                    </label>
                    <input placeholder="Price" className="p-2 w-full " type="text" name='price' />
                    <label className="label">
                        <span className="label-text text-white">Short Description</span>
                    </label>
                    <input placeholder="Short Description" className="p-2 w-full " type="text" name='description' />
                    <label className="label">
                        <span className="label-text text-white">Rating</span>
                    </label>
                    <input placeholder="Rating" className="p-2 w-full " type="text" name='rating' />
                    
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