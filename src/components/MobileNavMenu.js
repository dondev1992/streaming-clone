import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./MobileNavMenu.css";
import { motion } from "framer-motion";

function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const animateFrom = { opacity: 0, y: -45 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className="mobileNavMenu__container">
      <FaBars className="nav__menuIcon" onClick={() => setOpen(!open)} />
      {open && (
        <ul className="mobileNavMenu__list">
          <motion.li
            className="mobileNavMenu__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.02 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              exact
              to="/"
              className="mobileNavMenu__menu--links "
              activeStyle={{ fontWeight: "bold" }}
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li
            className="mobileNavMenu__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.07 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              to="/tvshows"
              className="mobileNavMenu__menu--links"
              activeStyle={{ fontWeight: "bold" }}
            >
              TV
            </NavLink>
          </motion.li>
          <motion.li
            className="mobileNavMenu__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.17 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              to="/movies"
              className="mobileNavMenu__menu--links"
              activeStyle={{ fontWeight: "bold" }}
            >
              Movies
            </NavLink>
          </motion.li>
          <motion.li
            className="mobileNavMenu__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.27 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              to="/popular"
              className="mobileNavMenu__menu--links"
              activeStyle={{ fontWeight: "bold" }}
            >
              New
            </NavLink>
          </motion.li>
          <motion.li
            className="mobileNavMenu__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.37 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              to="/mylist"
              className="mobileNavMenu__menu--links"
              activeStyle={{ fontWeight: "bold" }}
            >
              My List
            </NavLink>
          </motion.li>
        </ul>
      )}
    </div>
  );
}

export default MobileNavMenu;
