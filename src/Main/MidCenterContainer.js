import React, { Component } from "react";
import "./MidCenterContainer.css";
import MiddleImg from "../5998-Summer_Phase2_BrandModule_Seeker.jpg";

class MidCenterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      h3: "Care Smarts Activity",
      p1: "A Care.com family asked Jan 6,2015 at 4:40 AM:",
      p2: "how to get childcare or child care article?",
      p3: "Looking for Expert Article module.",
    };
  }

  render() {
    const { h3, p1, p2, p3 } = this.state;
    return (
      <div className="midMidSection">
        <img className="middleImg" src={MiddleImg} alt="image" />
        <div className="midLowerSection">
          <div className="midText">
            <h3 className="h3">{h3}</h3>
            <p className="lightText">{p1}</p>
            <p className="greyTxt paragraph">{p2}</p>
            <p>{p3}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MidCenterContainer;
