import React from "react";
import Banner from "./Banner";
import MidCenterContainer from "./MidCenterContainer";
import MidLeftContainer from "./MidLeftContainer";
import MidRightContainer from "./MidRightContainer";
import "./Main.css";

const Main = () => (
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

export default Main;
