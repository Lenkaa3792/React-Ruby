import React from "react";
import {NavLink}from "react-router-dom";

export default function Nav ()
{
    return (
      <Nav>
        
        
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/book" activeStyle>
            Book
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        
      </Nav>
    );
    
}