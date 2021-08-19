import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import "./Nav.css";
import { FaBars } from "react-icons/fa";

function Nav(props) {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="nametag"
        />
        <div className="nav__menu">
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
        </div>
        <FaBars className="nav__menuIcon" onClick={() => setOpen(!open)} />

        <img
          onClick={() => {
            history.push("/profile");
          }}
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
