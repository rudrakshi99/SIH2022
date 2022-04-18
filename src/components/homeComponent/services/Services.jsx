import React from "react";
import "./Services.css";
import services4 from "../../../img/services4.png";

const Services = () => {
  return (
    <div className="h-1/2 bg-evergreen bg-grey mt-3 p-9">
      <div className="flex justify-center flex-col p-9">
        <h1 className="text-4xl mt-2 font-bold m-auto">Our Services</h1>
        <p className="mt-3 text-lg font-semibold m-auto ">
          Following are the services that Krishi Sadhan market provides for
          Farmers:
        </p>
        <img src={services4} className="serviceImg" alt="" />
      </div>
    </div>
  );
};

export default Services;
