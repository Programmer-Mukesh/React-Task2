import React, { Component } from "react";

class Grid1Container3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greyTxt: "Discover",
      pArray: [
        "HomePay",
        "Advertising",
        "Employee Benefits Programs",
        "Terms of Use",
        "Privacy Policy",
        "Care Directory",
      ],
    };
  }

  render() {
    const { greyTxt, pArray } = this.state;
    return (
      <div className="gridItem1">
        <p className="greyTxt">{greyTxt}</p>
        {pArray.map((x, index) => (
          <p className="blueText" key={index}>
            {x}
          </p>
        ))}
      </div>
    );
  }
}

export default Grid1Container3;
