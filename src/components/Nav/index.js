import React from "react";
import "./style.css";
import logo from "./logo.jpg"

const Nav =() => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-brand">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"></img>
        Prestige Worldwide
      </div>
    </nav>
  );
}

export default Nav;
