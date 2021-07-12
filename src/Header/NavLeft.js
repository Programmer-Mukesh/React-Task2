import React, { Component } from "react";

class NavLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["Children", "Seniors", "Pets", "Home", "Military Families"],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="navLeft">
        {items.map((x, index) => (
          <a href="#" className="menuLeft" key={index}>
            {x}
          </a>
        ))}
      </div>
    );
  }
}

export default NavLeft;
