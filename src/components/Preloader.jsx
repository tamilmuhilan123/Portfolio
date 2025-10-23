import React from "react";
import "../styles/preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="wave-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
