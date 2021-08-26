import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlinks.css";

function Navlinks() {
  return (
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
        to="/mylist"
        className="nav__menu--headings"
        activeStyle={{ fontWeight: "bold" }}
      >
        My List
      </NavLink>
    </nav>
  );
}

export default Navlinks;
