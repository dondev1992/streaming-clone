import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./MobileNavlinks.css";
import { motion } from "framer-motion";

function MobileNavlinks() {
  const [open, setOpen] = useState(false);
  const animateFrom = { opacity: 0, y: -45 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className="mobilenavlinks__container">
      <FaBars className="nav__menuIcon" onClick={() => setOpen(!open)} />
      {open && (
        <ul className="mobilenavlinks__list">
          <motion.li
            className="mobilenavlinks__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.02 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              exact
              to="/"
              className="nav__menu--links "
              activeStyle={{ fontWeight: "bold" }}
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li
            className="mobilenavlinks__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.07 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              to="/tvshows"
              className="nav__menu--links"
              activeStyle={{ fontWeight: "bold" }}
            >
              TV
            </NavLink>
          </motion.li>
          <motion.li
            className="mobilenavlinks__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.17 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              to="/movies"
              className="nav__menu--links"
              activeStyle={{ fontWeight: "bold" }}
            >
              Movies
            </NavLink>
          </motion.li>
          <motion.li
            className="mobilenavlinks__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.27 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              to="/popular"
              className="nav__menu--links"
              activeStyle={{ fontWeight: "bold" }}
            >
              New
            </NavLink>
          </motion.li>
          <motion.li
            className="mobilenavlinks__navlink"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.37 }}
          >
            <NavLink
              onClick={() => setOpen(false)}
              to="/mylist"
              className="nav__menu--links"
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

export default MobileNavlinks;
