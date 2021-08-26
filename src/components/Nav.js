import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import Navlinks from "./Navlinks";
import MobileNavlinks from "./MobileNavlinks";

function Nav(props) {
  const [show, handleShow] = useState(false);
  const history = useHistory();

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
          <Navlinks />
        </div>
        <div className="nav__mobile--container">
          <MobileNavlinks />
        </div>

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
