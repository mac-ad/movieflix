import React from "react";
import "./Button1.css";

const Button1 = ({ text, icon, type, onClick }) => {
  return (
    <div className={`${type} button1`} onClick={onClick}>
      <p className="text">{text}</p>
      {icon}
    </div>
  );
};

export default Button1;
