import React, { Component } from "react";
import "./Nav.css";
import NavItem from "./NavItem";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftItems: ["Children", "Seniors", "Pets", "Home", "Military Families"],
      rightItems: ["Advice", "Payments", "Safety", "Message", "MyCare.com"],
    };
  }

  render() {
    const { leftItems, rightItems } = this.state;
    return (
      <div className="nav">
        <div className="navLeft">
          <NavItem items={leftItems} classN="menuLeft" />
        </div>
        <div className="navRight">
          <NavItem items={rightItems} classN="menuRight" />
        </div>
      </div>
    );
  }
}

export default Nav;
