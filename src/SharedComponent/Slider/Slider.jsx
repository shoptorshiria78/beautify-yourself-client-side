import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import {  EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';

const Slider = () => {

    const bannerData = [
        {    
            title:"LOREAL",
            img: 'https://i.ibb.co/Wz6xbqR/advertisement-img-1.jpg',
            description: "L'Oréal is a globally renowned beauty and cosmetics brand that has long been synonymous with sophistication, innovation, and self-expression. With a rich heritage dating back to 1909, L'Oréal has consistently been at the forefront of the beauty industry, setting trends and pushing the boundaries of what's possible in the world of cosmetics.",
        },
        {   
            title:"CHANEL",
            img: 'https://i.ibb.co/HV80Cwb/advertisement-img-2.jpg',
            description: 'Chanel Cosmetics epitomize timeless elegance and luxury. From iconic fragrances to high-quality makeup, Chanel offers sophistication in every product. With a legacy of innovation and style, Chanel cosmetics empower individuals to express their unique beauty and indulge in a touch of Parisian glamour.'
        },
        {
            title:"DIOR",
            img: "https://i.ibb.co/QHR3r3L/advertisement-img-3.png",
            description: 'Dior Cosmetics epitomize elegance and innovation. Their makeup and skincare products are synonymous with luxury, quality, and style. Dior captures the essence of Parisian chic, enabling individuals to radiate confidence and sophistication. With a history of excellence, Dior is a symbol of timeless beauty.'
        },
    ]

    const [activeIndexSlide, setActiveIndexSlide] = useState(0);

    const handleSwiper = (swiper) =>{
        setActiveIndexSlide(swiper.activeIndex);
    }

    return (
        <div className='relative'>
            <div className="hero min-h-screen absolute -7 mb-20" >
            
            
                <img className=' w-full bg-cover h-[600px]' src={bannerData[activeIndexSlide].img} alt="" />
           
            <div className="hero-overlay bg-opacity-80"></div>
            <div className=" w-full grid grid-cols-2">
                <div className='mt-40 w-10/12'>
                    <h1 className="text-4xl text-center text-fuchsia-200">{bannerData[activeIndexSlide].title}</h1>
                    <p className="text-xl text-center text-fuchsia-200 ">{bannerData[activeIndexSlide].description}</p>
                </div>
                <div className='w-10/12 mt-40'>
                <Swiper
               
               onSlideChange={(swiper) => handleSwiper(swiper)}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <img  src={bannerData[0].img} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img  src={bannerData[1].img} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={bannerData[2].img} alt="" />
                    </SwiperSlide>
                    
                </Swiper>
                </div>
            </div>
        </div>
        <div className="absolute top-3  w-full">
           <NavBar></NavBar>
           </div>
        </div>
    );
}

export default Slider;