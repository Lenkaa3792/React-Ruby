import React from "react";
import { NavLink } from "react-router-dom";
export function Nav() {
  const styles = {
    color: "blue",
  };
  return (
    <nav id="nav">
      <ul className="navs">
        <NavLink to="/about" style={styles}>
          About
        </NavLink>
        <NavLink to="/book" style={styles}>
          Book
        </NavLink>
        <NavLink to="/contact" style={styles}>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}
