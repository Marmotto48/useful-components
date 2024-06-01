import React from "react";
import "./flipCard.styles.css";
const FlipCard = () => {
  return (
    <div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="front">this is the front</div>
          <div className="back">this is the back</div>
        </div>
      </div>
      <div className="flip-list-container">
        <h1>Pick a card</h1>
        <ul>
          <li>
            <div className="list-front" style={{ backgroundColor: "#267df4" }}>
              1
            </div>
            <div className="list-back" style={{ backgroundColor: "#4c8fea" }}>
              1.1
            </div>
          </li>
          <li>
            <div className="list-front" style={{ backgroundColor: "#9126f4" }}>
              2
            </div>
            <div className="list-back" style={{ backgroundColor: "#a144f7" }}>
              2.1
            </div>
          </li>
          <li>
            <div className="list-front" style={{ backgroundColor: "#21bf3b" }}>
              3
            </div>
            <div className="list-back" style={{ backgroundColor: "#4dd763" }}>
              3.1
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlipCard;
