import React, { useState } from "react";

import down_arrow from "../../img/down-arrow.svg";

const ExpandDropdown = ({ heading, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="m-3">
      <div
        className=" bg-green-200 px-9 py-3 cursor-pointer hover:bg-green-300 flex"
        onClick={() => setOpen((prev) => setOpen(!prev))}
      >
        <p className="text-xl font-semibold">{heading}</p>
        <img
          style={{ height: "20px", width: "20px" }}
          src={down_arrow}
          alt="down-arrow"
          className="ml-auto"
        />
      </div>
      <div className={`${!open && "hidden"}  bg-green-300`}>
        <p className="px-9 py-3 text-lg">{content}</p>
      </div>
    </div>
  );
};

export default ExpandDropdown;
