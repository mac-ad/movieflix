import "./Main.css";

import React from "react";
import { MainTabs } from "../../components";

import MainCarousel from "./MainCarousel";

const Main = () => {
  return (
    <div>
      <MainCarousel />
      <MainTabs />
    </div>
  );
};

export default Main;
