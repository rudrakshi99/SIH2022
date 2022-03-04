import React from "react";

//Components
import ExpandDropdown from "../components/expandText";

const Help = () => {
  const booking_help = [
    {
      heading: "How do I book an equipment on Krishi Sadhan",
      content: "This is Expanded View",
    },
    { heading: "Hello", content: "This is Expanded View" },
    { heading: "Hello", content: "This is Expanded View" },
  ];
  const renting_help = [
    {
      heading: "How do I book an equipment on Krishi Sadhan",
      content: "This is Expanded View",
    },
    { heading: "Hello", content: "This is Expanded View" },
    { heading: "Hello", content: "This is Expanded View" },
  ];

  return (
    <div className="">
      <div className="bg-green-700 p-9 content-center">
        <h1 className="font-bold text-5xl text-center text-white m-8">
          How can we Help?
        </h1>
      </div>
      <div className="bg-white rounded-2xl mx-auto w-11/12 p-9 -translate-y-8 flex justify-center">
        <div style={{ width: "45%" }} className="text-center">
          <h1 className="text-xl font-semibold">Booking Help</h1>
          {booking_help.map((item, i) => {
            return (
              <ExpandDropdown
                key={i}
                heading={item.heading}
                content={item.content}
              />
            );
          })}
        </div>
        <div style={{ width: "45%" }} className="text-center w-100">
          <h1 className="text-xl font-semibold">Renting Help</h1>
          {renting_help.map((item, i) => {
            return (
              <ExpandDropdown
                key={i}
                heading={item.heading}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
      <div className="p-9 flex w-screen">
        <h1 className="text-2xl font-semibold">Still need help?</h1>
        <button
          className="px-6 py-1 mx-auto rounded-lg text-white text-xl font-semibold"
          style={{ backgroundColor: "#68AC5D" }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Help;
