import React, { Component } from "react";
import SocialLogos from './join us.png';

class GridItem3 extends Component {
  render() {
    return (
      <div className="gridItem3">
        <p className="greyTxt">Join us on</p>
        <img src={SocialLogos} alt="join us" />
      </div>
    );
  }
}

export default GridItem3;
