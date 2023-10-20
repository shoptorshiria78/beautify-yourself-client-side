import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';


const SingleCart = ({ cartData,cartDataOrdered,setCartDataOrdered }) => {

    console.log(cartData)

    const handleDelete =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/myCart/${id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              const remainingProduct = cartDataOrdered.filter( cartData=> cartData._id !== id);
                              setCartDataOrdered(remainingProduct);
                    }
                })
            //   
            }
          })

    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-red-100'>
            <img className='h-[300px] lg:col-span-1 w-full p-5 bg-white' src={cartData.image} alt="" />
            <div className='lg:col-span-1 flex h-full items-center ml-4'>
                <div >
                    <h1 className='text-xl font-bold text-fuchsia-500'>{cartData.name}</h1>
                    <p className='text-sm 
                     text-fuchsia-500 my-2'>{cartData.description}</p>
                    <p className='text-base font-medium 
                     text-fuchsia-500'>Price :{cartData.price} $</p>
                    <button className=' my-2 text-2xl font-bold text-fuchsia-500' onClick={()=>handleDelete(cartData._id)}><AiFillDelete ></AiFillDelete></button>
                </div>
            </div>
        </div>
    );
};
SingleCart.propTypes = {
    cartData: PropTypes.object,
    cartDataOrdered:PropTypes.array,
    setCartDataOrdered:PropTypes.func
}


export default SingleCart;