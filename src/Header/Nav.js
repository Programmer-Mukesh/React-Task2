import React, { Component } from "react";
import "./Nav.css";

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
          {leftItems.map((x, index) => (
            <a href="#" className="menuLeft" key={index}>
              {x}
            </a>
          ))}
        </div>
        <div className="navRight">
          {rightItems.map((x, index) => (
            <a href="#" className="menuRight" key={index}>
              {x}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Nav;
