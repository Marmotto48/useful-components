import React from "react";
import "./mario.styles.css";
import Cloud from "./images/cloud.png";
import MarioDrivingImg from "./images/mario-driving.png";
import LuigiImg from "./images/luigi-driving.png";
import MashroomImg from "./images/mashroom.png";
import Ground from "./images/mario-ground.png";
import Hill from "./images/mario-hill.png";
import Bush from "./images/mario-bush.png";
import Money from "./images/mario-money.png";
import MoneyBox from "./images/mario-money-box.jpg";
import MarioImg from "./images/mario.png";
import MarioJumpImg from "./images/mario-jump.png";

const Mario = () => {
  return (
    <div className="mario-wrapper">
      {/*  */}
      <div className="sky">
        <img src={Cloud} alt="" className="cloud-img" />
        <img src={Cloud} alt="" className="cloud-img" />
      </div>
      <div className="grass">
        <img src={MashroomImg} alt="" className="mashroom-img" />
      </div>
      <div className="road">
        <img src={MarioDrivingImg} className="mario-driving-img" alt="" />
        <img src={LuigiImg} className="luigi-img" alt="" />
        <div className="lines"></div>
      </div>
      {/*  */}
      <div>
        <div className="sky bigger-sky">
          <img src={Hill} alt="" className="hill-img" />
          <img src={Bush} alt="" className="bush-img" />
          <img src={MoneyBox} alt="" className="money-box-img" />
          <img src={MarioImg} alt="" className="mario-img" />
          <img src={MarioJumpImg} alt="" className="mario-jump-img" />
          <img src={Money} alt="" className="money-img" />
        </div>

        <div>
          <img src={Ground} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Mario;
