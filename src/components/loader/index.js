import React from "react";
// import Lottie from "react-lottie";
import * as animationData from "../../animations/tractor.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loader = () => {
  return (
    <div style={{ marginTop: "10rem" }}>
      {/* <Lottie options={defaultOptions} height={150} width={150} /> */}
    </div>
  );
};

export default Loader;
