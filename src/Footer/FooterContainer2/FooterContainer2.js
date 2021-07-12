import React, { Component } from "react";
import Grid1Container2 from "./Grid1Container2";
import Grid2Container2 from "./Grid2Container2";
import Grid3Container2 from "./Grid3Container2";
import "./FooterCont2.css";

class FooterContainer2 extends Component {
  render() {
    return (
      <div className="footerContainer2">
        <Grid1Container2 />
        <Grid2Container2 />
        <Grid3Container2 />
      </div>
    );
  }
}

export default FooterContainer2;
