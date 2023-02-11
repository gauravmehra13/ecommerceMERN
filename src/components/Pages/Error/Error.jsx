import React from "react";
import { NavLink } from "react-router-dom";


const Error = () => {
  return (
    <div>
      <div className="container">
        <h1>404 ERROR</h1>
      </div>
      <button id="back">
        <NavLink className="nav-link-back" to="/">
          BACK
        </NavLink>
      </button>
    </div>

  );
};

export default Error;
