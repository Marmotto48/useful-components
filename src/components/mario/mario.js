import React from "react";
import "./mario.styles.css";
import Cloud from "./images/cloud.png";
import MarioImg from "./images/mario.png";
import LuigiImg from "./images/luigi.png";
import MashroomImg from "./images/mashroom.png";

const Mario = () => {
  return (
    <div className="mario-wrapper">
      <div className="sky">
        <img src={Cloud} alt="" className="cloud-img" />
        <img src={Cloud} alt="" className="cloud-img" />
      </div>
      <div className="grass">
        <img src={MashroomImg} alt="" className="mashroom-img" />
      </div>
      <div className="road">
        <img src={MarioImg} className="mario-img" alt="" />
        <img src={LuigiImg} className="luigi-img" alt="" />
        <div className="lines"></div>
      </div>
    </div>
  );
};

export default Mario;
