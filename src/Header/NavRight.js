import React, { Component } from "react";

class NavRight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["Advice", "Payments", "Safety", "Message", "MyCare.com"],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="navRight">
        {items.map((x, index) => (
          <a href="#" className="menuRight" key={index}>
            {x}
          </a>
        ))}
      </div>
    );
  }
}

export default NavRight;
