import React from "react";
import "./Stats.css";
import people from "../../../img/people.svg";
import people1 from "../../../img/people1.svg";
import Frame3 from "../../../img/Frame3.png";

const Stats = () => {
  return (
    <div className="py-9 bg-#E5E5E5">
      <div className="flex items-center justify-center mx-20 my-[150px]">
        <div className="flex flex-1 flex-col justify-center items-center">
          <img className="statsImg" src={people1} alt="" />
          <h1 className="text-2xl font-bold mt-7">1,567,890</h1>
          <p className="text-lg font-normal w-1/2 text-center">
            Latest number of acquired customers.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <img className="statsImg" src={people} alt="" />
          <h1 className="text-2xl font-bold mt-7">4 out of 5</h1>
          <p className="text-lg font-normal w-1/2 text-center">
            Customers are satisfied with our services.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <img className="makeUp1" src={Frame3} alt="" />
          {/* <div className='relative justify-center items-center'>
                        <img className='makeUp1' src={Ellipse4} alt="" />
                        <img className='makeUp2' src={Ellipse5} alt="" />
                    </div> */}
          <h1 className="text-2xl font-bold mt-7">16% of Crop value</h1>
          <p className="text-lg font-normal w-1/2 text-center">
            Average Equipment Investments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
