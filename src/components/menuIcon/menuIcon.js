import React, { useState } from "react";
import "./menuIcon.styles.css";
const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        onClick={toggleIcon}
        className={isOpen ? "nav-icon-open" : "nav-icon"}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MenuIcon;
