import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="left-container">
        <h2>Welcome to Our Store</h2>
        <p>Designs</p>
        <h2>
          That highlight <span>You</span>
        </h2>
        <div className="button-container">
          <button>Buy</button>
          <button className="buttonView">View All</button>
        </div>
      </div>
      <div className="right-container">bbb</div>
    </div>
  );
};

export default Hero;
