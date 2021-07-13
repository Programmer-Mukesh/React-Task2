import React, { Component } from "react";
import "./MidLeftContainer.css";
import UploadImg from "../hero-thumb.png";
import Sidetiles from "./Sidetiles";

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
        <Sidetiles headings={sideTiles1} />
        <hr className="hrDot"></hr>
        <Sidetiles headings={sideTiles2} />
      </div>
    );
  }
}

export default MidLeftContainer;
