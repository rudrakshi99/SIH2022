import React, { useState } from "react";

const ExpandDropdown = ({ heading, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <article className="border-b">
        <div className="border-l-2 border-transparent">
          <header
            className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="text-grey-darkest font-thin text-xl">
              {heading}
            </span>
            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
              <svg
                ariaHidden="true"
                className=""
                dataReactid="266"
                fill="none"
                height="24"
                stroke="#606F7B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewbox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </header>
        </div>
      </article>
      <article className={`${open ? "show" : "hidden"} border-b`}>
        <div className="border-l-2 bg-grey-lightest border-indigo">
          <header
            className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
            onClick={() => setOpen(false)}
          >
            <span className="text-indigo font-thin text-xl">{content}</span>
            <div className="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
              <svg
                ariaHidden="true"
                data-reactid="281"
                fill="none"
                height="24"
                stroke="white"
                stroke-linecap="round"
                stroke-linjoin="round"
                stroke-width="2"
                viewbox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </div>
          </header>
        </div>
      </article>
    </div>
  );
};

export default ExpandDropdown;
