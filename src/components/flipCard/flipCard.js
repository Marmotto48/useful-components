import React from "react";
import "./flipCard.styles.css";
const FlipCard = () => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="front">this is the front</div>
        <div className="back">this is the back</div>
      </div>
    </div>
  );
};

export default FlipCard;
