import React, { Component } from "react";

class GridItem1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greyText: "Company",
      pArray: [
        "About Us",
        "Investor Relations",
        "Sheila's Blog",
        "Help",
        "Safety Center",
        "Careers",
      ],
    };
  }

  render() {
    const { greyText, pArray } = this.state;
    return (
      <div className="gridItem1">
        <p className="greyTxt">{greyText}</p>
        {pArray.map((x, index) => (
          <p className="blueText" key={index}>
            {x}
          </p>
        ))}
      </div>
    );
  }
}

export default GridItem1;
