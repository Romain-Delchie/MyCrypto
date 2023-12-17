import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navBar-link navBar-link-active" : "navBar-link"
        }
        to="/"
      >
        Défi
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navBar-link navBar-link-active" : "navBar-link"
        }
        to="/mon-pf"
      >
        Mon PF
      </NavLink>
    </header>
  );
}
