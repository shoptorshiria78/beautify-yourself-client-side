
import { useEffect, useState } from "react";
import ShowBrand from "../ShowBrand/ShowBrand";



const Brand = () => {

    const [brands, setBrands] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/brand")
        .then(res=>res.json())
        .then(data=>{
            setBrands(data);                
        })
    },[])
    console.log(brands);
    
    return (
        <div className=" max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] my-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                brands.map(brand=>
                <ShowBrand
                 key={brand._id}
                     brand={brand}></ShowBrand>)
            }
            
        </div>
    );
};


export default Brand;