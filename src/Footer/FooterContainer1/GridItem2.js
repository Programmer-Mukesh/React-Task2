import React, { Component } from "react";

class GridItem2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greyText: "Popular in Child Care",
      pArray: [
        "Babysitters",
        "Nannies",
        "Child Care",
        "Babysitting jobs",
        "Nanny Jobs",
      ],
    };
  }

  render() {
    const { greyText, pArray } = this.state;
    return (
      <div className="gridItem2">
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

export default GridItem2;
