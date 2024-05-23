import { Outlet } from "react-router-dom";

import { Footer, Nav } from "../../components/";

import "./MainLayout.css";
import { useEffect, useRef } from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout-container">
      <Nav />
      <div className="main-child ">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
