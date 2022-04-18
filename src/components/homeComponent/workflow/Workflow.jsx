import React from "react";
import "./Workflow.css";
import Rectangle73 from "../../../img/Rectangle73.png";
import videoPic from "../../../img/videoPic.png";

const Workflow = () => {
  return (
    <div className=" mb-10 p-12 bg-[#219653] ">
      <h1 className="text-4xl font-bold uppercase mb-4 text-center">
        How KRISHI SADHAN works?
      </h1>
      <p className="text-md font-medium uppercase mb-4 text-white text-center">
        Take a Look at out Platform Demo
      </p>
      <div className="flex justify-around mediaQuery items-center text-white">
        <div className="grow">
          <ul className="list-decimal ml-4 list-inside">
            <li className="text-2xl mr-4 my-2">Sign-up to the platform.</li>
            <li className="text-2xl mr-4 my-1">
              Post your ad for the off-season.
            </li>
            <li className="text-2xl mr-4 my-2">Provide equipment details.</li>
            <li className="text-2xl mr-4 my-1">
              Explore and filter lists of equipment.
            </li>
            <li className="text-2xl mr-4 my-2">
              Check an available time slot.
            </li>
            <li className="text-2xl mr-4 my-1">
              Chat with the owner and make a booking..
            </li>
            <li className="text-2xl mr-4 my-2">Stay updated by SMS.</li>
          </ul>
        </div>
        <div className="h-1/2 w-1/2">
          {/* <img src={Rectangle73} className='youtubeImg' alt="" /> */}
          <img src={videoPic} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
