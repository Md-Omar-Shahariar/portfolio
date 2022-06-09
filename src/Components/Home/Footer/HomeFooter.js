import React from "react";
import "./HomeFooter.css";
import img from "../../../assets/Home/shape-bg.png";

const HomeFooter = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default HomeFooter;
