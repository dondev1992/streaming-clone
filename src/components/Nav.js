import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import Navlinks from "./Navlinks";
import MobileNavMenu from "./MobileNavMenu";

/**
 * @description Creates Navigation Component with a background transition effect
 */
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  /**
   * @description A function that handles when the navbar 
   * background will transition to solid black
   */
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  /**
   * @description When the navbar first mounts, it will add an 
   * eventlistener to the navbar and when the navbar
   * unmounts the eventlistener is removed
   */
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
          <MobileNavMenu />
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
