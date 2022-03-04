import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 z-40">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loader;
