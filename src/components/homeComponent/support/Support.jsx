import React from "react";
import "./Support.css";
import vector11 from "../../../img/Vector11.png";
import vector22 from "../../../img/Vector22.png";
import vector33 from "../../../img/Vector33.png";

const Support = () => {
  return (
    <div className="h-2/5 p-12">
      <h1 className="text-2xl font-semibold uppercase text-center">
        What we offer
      </h1>
      <p className="text-lg text-center my-6">
        Being a part of Krishi Sadhan, this is what you get from us:
      </p>
      <div className="flex justify-center mediaQuery items-center">
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector11} alt="" />
          <h3 className="text-lg font-semibold mt-5">24*7 customer support</h3>
          <p className="text-xs text-center font-normal">
            We’re just one call away.
          </p>
        </div>
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector22} alt="" />
          <h3 className="text-lg font-semibold mt-5">24*7 customer support</h3>
          <p className="text-xs text-center font-normal">
            We’re just one call away.
          </p>
        </div>
        <div className="supportItem mx-5 getMargin p-9 rounded-2xl">
          <img className="supportImg" src={vector33} alt="" />
          <h3 className="text-lg font-semibold mt-5">24*7 customer support</h3>
          <p className="text-xs text-center font-normal">
            We’re just one call away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
