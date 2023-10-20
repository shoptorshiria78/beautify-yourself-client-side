import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ShowBrand = ({ brand }) => {

    const navigate = useNavigate();

    const handleProduct=(brand)=>{
        navigate(`/product/${brand}`)

    }
    
    return (
        <div onClick={()=>handleProduct(brand.brand)} className="card  bg-gradient-to-r from-violet-200 to-fuchsia-200 shadow-xl">
            <figure className=" pt-2">
                <img src={brand.img} alt="brands" className="rounded w-11/12 h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-violet-400">{brand.brand}</h2>            
            </div>
        </div>
    );
};

ShowBrand.propTypes = {

    brand: PropTypes.object,

}

export default ShowBrand;