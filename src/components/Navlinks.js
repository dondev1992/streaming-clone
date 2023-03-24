import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlinks.css";

/**
 * @description Creates links for page navigation with the navbar
 * @returns NavLink 
 */
function Navlinks() {
  return (
    // Navlinks are clickable elements that will redirect you to another screen
    <nav>
      <NavLink
        exact
        to="/"
        className="nav__menu--headings "
        activeStyle={{ fontWeight: "bold" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/tvshows"
        className="nav__menu--headings"
        activeStyle={{ fontWeight: "bold" }}
      >
        TV Shows
      </NavLink>
      <NavLink
        to="/movies"
        className="nav__menu--headings"
        activeStyle={{ fontWeight: "bold" }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/popular"
        className="nav__menu--headings"
        activeStyle={{ fontWeight: "bold" }}
      >
        New & Popular
      </NavLink>
      <NavLink
        to="/"
        className="nav__menu--headings"
      >
        My List
      </NavLink>
    </nav>
  );
}

export default Navlinks;
