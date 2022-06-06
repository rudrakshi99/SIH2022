import React from "react";
import "./Support.css";
import vector11 from "../../../img/vector11.svg";
import vector22 from "../../../img/vector22.svg";
import vector33 from "../../../img/vector33.svg";

const Support = () => {
  return (
    <div className="h-2/5 p-12">
      <h1 className="text-2xl font-semibold uppercase text-center">
        What we offer
      </h1>
      <p className="text-lg text-center mb-[100px] mt-3 opacity-90">
        Being a part of Krishi Sadhan, this is what you get from us:
      </p>
      <div className="flex justify-center mediaQuery items-center mb-[100px]">
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector11} alt="" />
          <h3 className="text-xl mb-1 text-center font-semibold mt-5">
            24*7 customer support
          </h3>
          <p className="text-md text-center font-normal">
            We’re just one call away.
          </p>
        </div>
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector22} alt="" />
          <h3 className="text-xl mb-1 text-center font-semibold mt-5">
            Trusted Sellers/Buyers
          </h3>
          <p className="text-md text-center font-normal">
            Ensured safety of your experience.
          </p>
        </div>
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector33} alt="" />
          <h3 className="text-xl mb-1 text-center font-semibold mt-5">
            One-click Booking
          </h3>
          <p className="text-md text-center font-normal">
            Time saving bookings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
