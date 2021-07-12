import React, { Component } from "react";
import Grid1Container3 from "./Grid1Container3";
import Grid2Container3 from "./Grid2Container3";
import "./FooterCont3.css";

class FooterContainer3 extends Component {
  render() {
    return (
      <div className="footerContainer3">
        <Grid1Container3 />
        <Grid2Container3 />
      </div>
    );
  }
}

export default FooterContainer3;
