import React from "react";
import { Carousel } from 'antd';

const CarouSel = () => {
    return (
        <Carousel autoplay arrows  infinite>
            <img
                src="/src/assets/img/puppies.jpg"
                alt="Carousel"
                className="object-cover object-center rounded contrast-100 brightness-60 border-2 border-gray-200 drop-shadow-xl/30"
            />
            <img
                src="/src/assets/img/puppies2.jpg"
                alt="Carousel"
                className=" h-[370px] lg:h-[510px] object-cover object-center rounded contrast-100 brightness-60 border-2 border-gray-200 drop-shadow-xl/30"
            />
             <img
                src="/src/assets/img/puppies3.jpg"
                alt="Carousel"
                className=" h-[370px] lg:h-[510px] object-cover object-center rounded contrast-100 brightness-60 border-2 border-gray-200 drop-shadow-xl/30"
            />
            <img
                src="/src/assets/img/puppies4.jpg"
                alt="Carousel"
                className=" h-[370px] lg:h-[510px] object-cover object-center rounded contrast-100 brightness-60 border-2 border-gray-200 drop-shadow-xl/30"
            />
           <img
                src="/src/assets/img/puppies5.jpg"
                alt="Carousel"
                className=" h-[370px] lg:h-[510px] object-cover object-center rounded contrast-100 brightness-60 border-2 border-gray-200 drop-shadow-xl/30"
            />
           
           
        </Carousel>
    );
}
export default CarouSel;