import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "aliceblue",
};

export default function Nav() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/" exact className="link" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/CurrentWeather"
            exact
            className="link"
            activeStyle={activeStyle}
          >
            Current Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/FutureWeather"
            exact
            className="link"
            activeStyle={activeStyle}
          >
            Future Weather
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
