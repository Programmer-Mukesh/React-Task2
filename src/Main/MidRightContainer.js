import React, { Component } from "react";
import "./MidLeftContainer.css";

class MidRightContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      h3: "My Bookings",
      p1: "You don't have any bookings yet",
      p2: "Schedule and pay caregivers right from your account. Plus-stay intouch with potential hires throughout the hiring process.",
      btnText: "Find caregivers now",
    };
  }

  render() {
    const { h3, p1, p2, btnText } = this.state;
    return (
      <div className="midRightItem">
        <div className="imageText">
          <h3 className="midRightText">{h3}</h3>
          <p className="midRightText imageSubText">{p1}</p>
          <br />
          <p className="midRightText para">{p2}</p>
          <button className="btn midRrightText">{btnText}</button>
        </div>
      </div>
    );
  }
}

export default MidRightContainer;
