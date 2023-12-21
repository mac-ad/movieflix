import React from "react";
import { Link } from "react-router-dom";

import "./NormalLink.css";

const NormalLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default NormalLink;
