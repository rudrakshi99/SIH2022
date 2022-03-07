import React from "react";
import './Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import home1 from "../../../img/home1.webp";
import slider2 from "../../../img/slider2.webp";
import slider3 from "../../../img/slider3.webp";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
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
          <div className="flex flex-col justify-center -mt-10 wrapper">
            <p className="text-2xl font-normal text-gray-800">Namaste, welcome to Krishi Sadhan.</p>
            <h1 className="text-4xl font-bold text-gray-800"><span className="text-[#57914e]">Farmer’s Eqipments</span> at reasonable <br /> and affordable prices.</h1>
            <p className="text-lg font-normal mt-2 mb-4">Start now with just one click.</p>
            <button onClick={() => navigate('/dashboard')} className="shadow-md bg-darkgreen mx-auto hover:bg-[#64a55a] text-white font-normal w-[200px] py-2 px-2 rounded">
              Book Now  <i className="pl-4 w-12 fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={slider2} />
      </div>
      <div>
        <img src={slider3} />
      </div>
    </Carousel>
  );
};

export default Banner;
