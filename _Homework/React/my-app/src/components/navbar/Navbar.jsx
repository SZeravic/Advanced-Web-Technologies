import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">      
        <a href="/" className="brand-logo"> Web Shop!</a>
        <ul>
          <li className="right"> <NavLink to="/"> Products </NavLink></li>
          <li className="right"> <NavLink to="/Product"> Product </NavLink> </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
