import React, { Component } from "react";
import "./Nav.css";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLeft />
        <NavRight />
      </div>
    );
  }
}

export default Nav;
