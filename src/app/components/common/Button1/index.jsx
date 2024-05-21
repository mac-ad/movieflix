import React from "react";
import "./Button1.css";

const Button1 = ({ className, onClick, children }) => {
  return (
    <div className={` button1 ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button1;
