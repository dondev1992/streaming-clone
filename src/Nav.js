import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

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
          // onClick={() => {
          //   history.push("/");
          // }}
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="nametag"
        />
        <div className="nav__menu">
          <h5
            onClick={() => {
              history.push("/");
            }}
            className="nav__menu--headings nav__menu--home"
          >
            Home
          </h5>
          <h5
            onClick={() => {
              history.push("/tvshows");
            }}
            className="nav__menu--headings"
          >
            TV Shows
          </h5>
          <h5
            onClick={() => {
              history.push("/movies");
            }}
            className="nav__menu--headings"
          >
            Movies
          </h5>
          <h5
            onClick={() => {
              history.push("/popular");
            }}
            className="nav__menu--headings"
          >
            New & Popular
          </h5>
          <h5
            onClick={() => {
              history.push("/mylist");
            }}
            className="nav__menu--headings"
          >
            My List
          </h5>
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
      <div>
        <h1 className="nav__genre">{props?.title}</h1>
      </div>
    </div>
  );
}

export default Nav;
