import React, { Component } from "react";
import "./Nav.css";
import NavItem from "./NavItem";

const Nav = () => {
  const leftItems = [
    "Children",
    "Seniors",
    "Pets",
    "Home",
    "Military Families",
  ];
  const rightItems = ["Advice", "Payments", "Safety", "Message", "MyCare.com"];

  return (
    <div className="nav">
      <div className="navLeft">
        <NavItem items={leftItems} classN="menuLeft" />
      </div>
      <div className="navRight">
        <NavItem items={rightItems} classN="menuRight" />
      </div>
    </div>
  );
};

export default Nav;
