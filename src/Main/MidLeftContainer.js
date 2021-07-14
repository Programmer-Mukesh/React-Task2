import React from "react";
import "./MidLeftContainer.css";
import UploadImg from "../hero-thumb.png";
import Sidetiles from "./Sidetiles";

const MidLeftContainer = () => {
  const sideTiles1 = ["My Messages", "My Bookings (0)"];
  const sideTiles2 = [
    "My Jobs",
    "My Caregivers",
    "Payment center",
    "Payroll & Taxes",
  ];

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
};

export default MidLeftContainer;
