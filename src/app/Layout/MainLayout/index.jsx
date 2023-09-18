import { Outlet } from "react-router-dom";

import { Nav } from "../../components/";

import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout-container">
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
