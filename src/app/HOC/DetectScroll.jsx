import React, { useEffect, useRef } from "react";

const DetectScroll = ({ children }) => {
  const myDiv = useRef(null);

  useEffect(() => {
    myDiv.current.addEventListener("scroll", (e) => {
      console.log("scrolling");
    });
  }, []);

  return (
    <div
      ref={myDiv}
      style={{
        border: "1px solid red",
      }}
    >
      {children}
    </div>
  );
};

export default DetectScroll;
