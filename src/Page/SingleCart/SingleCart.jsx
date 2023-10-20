import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';


const SingleCart = ({ cartData,cartDataOrdered,setCartDataOrdered }) => {

    console.log(cartData)

    const handleDelete =(_id)=>{
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

                fetch(`https://localhost:5000/myCart/${_id}`,{
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
                              const remainingProduct = cartDataOrdered.filter( cartData=> cartData._id !== _id);
                              setCartDataOrdered(remainingProduct);
                    }
                })
            //   
            }
          })

    }

    return (
        <div className='grid grid-cols-3'>
            <img className='h-[300px] w-full' src={cartData.image} alt="" />
            <div className='col-span-2 flex h-full items-center ml-4'>
                <div >
                    <h1>{cartData.name}</h1>
                    <p>{cartData.description}</p>
                    <p>{cartData.price}</p>
                    <button onClick={()=>handleDelete(cartData._id)}><AiFillDelete className='text-4xl'></AiFillDelete></button>
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