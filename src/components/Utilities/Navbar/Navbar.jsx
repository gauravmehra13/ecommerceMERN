// import { useState, useRef } from "react";
import React from "react";
import "./Navbar.css";
import { Outlet, NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { textAlign } from "@mui/system";


const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <header className="logo">
          {/* <div className="item blue"></div> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png?20221128191222" alt="samsung" width="350px" />
        </header>
        <ul className="list">
          <li>
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Store">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/iPhone">
             SmartPhones
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/iPad">
              Tablets
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Macbook">
              Watches
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Accessories">
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <Divider variant="middle" />

      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
