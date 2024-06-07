import React from "react";
import "./popupAnimation.styles.css";
const PopupAnimation = ({ isOpen, onClose, children }) => {
  return (
    <div className="modal-parent">
      <dialog open={isOpen} className="modal" onClick={onClose}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </dialog>
    </div>
  );
};

export default PopupAnimation;
