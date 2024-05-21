import React from "react";
import "./PrimaryBtn.css";

const PrimaryBtn = ({ text, icon }) => {
  return (
    <button className="primary-btn">
      {icon && icon}
      {text}
    </button>
  );
};

export default PrimaryBtn;
