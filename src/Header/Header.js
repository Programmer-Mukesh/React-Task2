import React, { Component } from "react";
import TopLayout from "./TopLayout";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <TopLayout />
        <Nav />
      </div>
    );
  }
}

export default Header;
