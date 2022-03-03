import React from "react";
import './Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import home1 from "../../../img/home1.webp";
import home2 from "../../../img/home2.webp";

const Banner = () => {
  return (
    <Carousel
      autoplay={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
    >
      <div className="relative">
        <div className="absolute w-full h-full bg-gradient-to-r from-green-600/10 to-green-600/10 bottom-0  z-20" />
        <img src={home1} className="home1Img" />
        <div>
          <div className="flex flex-col justify-center wrapper">
            <p className="text-xl font-light">Namaste, welcome to Krishi Sadhan.</p>
            <h1 className="text-3xl font-bold text-gray-700"><span className="text-[#68AC5D]">Farmer’s Eqipments</span> at reasonable <br /> and affordable prices.</h1>
            <p className="text-lg font-light mt-2 mb-4">Start now with just one click.</p>
            <button className="shadow-md bg-darkgreen mx-auto hover:bg-green-700 text-white font-normal w-[200px] py-2 px-2 rounded">
              Book Now  <i className="pl-4 w-12 fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={home2} />
      </div>
    </Carousel>
  );
};

export default Banner;
