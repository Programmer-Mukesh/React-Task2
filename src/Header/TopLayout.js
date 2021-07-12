import React, { Component } from "react";
import UpperRight from "./UpperRight";
import "./TopLayout.css";
import Logo from "../care-logo.gif";

class TopLayout extends Component {
  render() {
    return (
      <div className="topLayout">
        <img className="logo" src={Logo} alt="logo" />
        <UpperRight />
      </div>
    );
  }
}

export default TopLayout;
