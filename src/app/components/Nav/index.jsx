import React from "react";

import { navlist } from "./navlist";

import "./nav.css";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import Logo from "../Logo";

const Nav = () => {
  return (
    <div className="nav-container">
      <Logo />
      <ul>
        {navlist.map((item) => (
          <li key={item.label}>
            <NavLink to={item.to}>
              <span className="icon solid">
                <Icon icon={item.iconSolid} />
              </span>
              <span className="icon light">
                <Icon icon={item.iconLight} />
              </span>
              <p>{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
