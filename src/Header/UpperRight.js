import React, { Component } from "react";
import FbLogo from "../joinus.png";
import TwitterLogo from "../twitter (1).png";

class UpperRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "Hi, Adflk",
      text2: "Log Out",
      text3: "Businesses & Organizations ",
      text4: "How it Works",
      text5: "Help",
    };
  }

  render() {
    const { 
      text1, 
      text2, 
      text3, 
      text4, 
      text5 
    } = this.state;

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
  }
}

export default UpperRight;
