import React, { Component } from "react";
import "./MidLeftContainer.css";
import UploadImg from "../hero-thumb.png";

class MidLeftContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideTiles1: ["My Messages", "My Bookings (0)"],
      sideTiles2: [
        "My Jobs",
        "My Caregivers",
        "Payment center",
        "Payroll & Taxes",
      ],
    };
  }

  render() {
    const { sideTiles1, sideTiles2 } = this.state;
    return (
      <div className="midLeftSection">
        <img className="midLeftImg" src={UploadImg} alt="hero-thumb" />
        <h4 className="h4 sideTiles">My Care.com</h4>
        <hr className="hrDot"></hr>
        {sideTiles1.map((x, index) => (
          <p key={index} className="blueText sideTiles">
            {x}
          </p>
        ))}
        <hr className="hrDot"></hr>
        {sideTiles2.map((x, index) => (
          <p key={index} className="blueText sideTiles">
            {x}
          </p>
        ))}
      </div>
    );
  }
}

export default MidLeftContainer;
