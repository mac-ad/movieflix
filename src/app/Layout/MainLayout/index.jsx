import { Outlet } from "react-router-dom";

import { Nav } from "../../components/";

import "./MainLayout.css";
import { useEffect, useRef } from "react";

const MainLayout = () => {
  const myDiv = useRef(null);

  useEffect(() => {
    console.log(myDiv.current);
  }, []);

  return (
    <div className="main-layout-container" ref={myDiv}>
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
