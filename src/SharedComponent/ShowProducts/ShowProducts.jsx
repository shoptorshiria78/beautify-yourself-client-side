import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BsStar } from "react-icons/bs";



const ShowProducts = ({ loadedProduct }) => {

    const navigate = useNavigate()

    const handleDetails = (id) => {
        navigate(`/productDetails/${id}`)
    }

    const handleUpdate = (id) => {
        navigate(`/updateProduct/${id}`)
    }

    return (
        <div className=" px-3 py-3 bg-fuchsia-200 mt-7">
            <h1 className='text-2xl text-center font-bold my-4 text-fuchsia-500'>{loadedProduct.brand}</h1>
            <div className='flex h-[280px] items-center'>
                <figure className="">
                    <img src={loadedProduct.image} alt="people" className="rounded w-[330px] h-52 bg-white p-3" />
                </figure>
                <div className=" mt-4 space-y-2 flex flex-col ml-3 ">
                    <h2 className="card-title text-left text-fuchsia-600">{loadedProduct.name}</h2>
                    <h2 className='text-base font-semibold text-left text-fuchsia-600'>{loadedProduct.type.toUpperCase()}</h2>

                    <p className='text-fuchsia-600 text-sm'>Price : {loadedProduct.price} $</p>
                    <p className='flex items-center text-fuchsia-600 text-sm'>Rating: {loadedProduct.rating}<BsStar className='ml-2'></BsStar></p>

                    <div className=" flex justify-between mt-3  ">
                        <button onClick={() => handleDetails(loadedProduct._id)} className=" bg-fuchsia-600 text-white w-1/3 my-3 py-1 px-1 text-xs rounded ">Details</button>
                        <button onClick={() => handleUpdate(loadedProduct._id)} className=" bg-fuchsia-600 text-white w-1/3 my-3 py-1 px-1 text-xs rounded ">Update</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

ShowProducts.propTypes = {

    loadedProduct: PropTypes.object,

}

export default ShowProducts;