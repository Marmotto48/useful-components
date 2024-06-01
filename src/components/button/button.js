import React from "react";
import "./button.styles.css";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      Click here
    </button>
  );
};

export default Button;
