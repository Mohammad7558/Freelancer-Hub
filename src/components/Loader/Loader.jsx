import Lottie from "lottie-react";
import React from "react";
import loader from "../../../src/assets/Loader.json";

const Loader = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <div className="w-28">
        <Lottie animationData={loader} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Loader;
