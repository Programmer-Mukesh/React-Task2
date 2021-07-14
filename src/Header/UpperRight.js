import React from "react";
import FbLogo from "../joinus.png";
import TwitterLogo from "../twitter (1).png";

const UpperRight = () => {
  const text1 = "Hi, Adflk";
  const text2 = "Log Out";
  const text3 = "Businesses & Organizations ";
  const text4 = "How it Works";
  const text5 = "Help";

  return (
    <div className="upperRight">
      <p className="logout">
        {text1} <span className="bar">|</span>
        <span className="bluetext">{text2}</span>
      </p>
      <p className="blueText">
        {text3}
        <span className="bar">|</span> {text4} <span className="bar">|</span>
        {text5}
      </p>
      <div className="upperRightImages">
        <img className="fbLogo" src={FbLogo} alt="fb" />
        <img className="twitterLogo" src={TwitterLogo} alt="twitter" />
      </div>
    </div>
  );
};

export default UpperRight;
