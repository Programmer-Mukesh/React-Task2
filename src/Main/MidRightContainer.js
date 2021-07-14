import React from "react";
import "./MidLeftContainer.css";

const MidRightContainer = () => {
  const h3 = "My Bookings";
  const p1 = "You don't have any bookings yet";
  const p2 =
    "Schedule and pay caregivers right from your account. Plus-stay intouch with potential hires throughout the hiring process.";
  const btnText = "Find caregivers now";

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
};

export default MidRightContainer;
