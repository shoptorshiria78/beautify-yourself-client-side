import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BsStar } from "react-icons/bs";



const ShowProducts = ({ loadedProduct }) => {

    const navigate = useNavigate()

    const handleDetails = (id) => {
        navigate( `/productDetails/${id}`)
    }

    const handleUpdate =(id)=>{
        navigate(`/updateProduct/${id}`)
    }

    return (   
            <div className=" px-3 py-3 bg-[#e0e1f1] mt-7">
                <h1 className='text-2xl text-center font-bold my-4 text-[#4a54ec]'>{loadedProduct.brand}</h1>
                <figure className="">
                    <img src={loadedProduct.image} alt="people" className="rounded w-[330px] h-52 bg-white" />
                </figure>
                <div className=" mt-4 space-y-2 flex flex-col ">
                    <h2 className="card-title text-center text-[#4a54ec]">{loadedProduct.name}</h2>
                    <h2 className='text-lg font-semibold text-center text-blue-400'>{loadedProduct.type.toUpperCase()}</h2>
                    <div className=' flex justify-between w-full text-[#7b83f3] font-bold'>
                        <p>Price : {loadedProduct.price} $</p>
                        <p className='flex items-center'>Rating: {loadedProduct.rating}<BsStar className='ml-2'></BsStar></p>
                    </div>
                    <div className=" flex justify-between mt-3  ">
                        <button onClick={()=>handleDetails(loadedProduct._id)} className=" bg-[#473fed] text-white w-1/3 my-3 py-2 px-3 rounded-xl ">Details</button>
                        <button onClick={()=>handleUpdate(loadedProduct._id)} className=" bg-[#473fed] text-white w-1/3 my-3 py-2 px-3 rounded-xl ">Update</button>
                    </div>
                </div>
            </div>
       
    );
};

ShowProducts.propTypes = {

    loadedProduct: PropTypes.object,

}

export default ShowProducts;