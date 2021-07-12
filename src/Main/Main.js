import React, { Component } from "react";
import Banner from "./Banner";
import MidCenterContainer from "./MidCenterContainer";
import MidLeftContainer from "./MidLeftContainer";
import MidRightContainer from "./MidRightContainer";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <hr className="divider"></hr>
        <Banner />
        <div className="middleContainer">
          <MidLeftContainer />
          <MidCenterContainer />
          <MidRightContainer />
        </div>
      </div>
    );
  }
}

export default Main;
