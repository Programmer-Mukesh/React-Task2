import React, { Component } from "react";
import "./Footer.css";
import FooterContainer1 from "./FooterContainer1/FooterContainer1";
import FooterContainer2 from "./FooterContainer2/FooterContainer2";
import FooterContainer3 from "./FooterContainer3/FooterContainer3";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FooterContainer1 />
        <FooterContainer2 />
        <FooterContainer3 />
      </div>
    );
  }
}

export default Footer;
