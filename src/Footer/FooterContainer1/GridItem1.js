import React, { Component } from "react";

class GridItem1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greyText1: "Company",
      pArray1: [
        "About Us",
        "Investor Relations",
        "Sheila's Blog",
        "Help",
        "Safety Center",
        "Careers",
      ],
      greyText2: "Popular in Child Care",
      pArray2: [
        "Babysitters",
        "Nannies",
        "Child Care",
        "Babysitting jobs",
        "Nanny Jobs",
      ],
    };
  }

  render() {
    const { greyText1, pArray1, greyText2, pArray2 } = this.state;
    return (
      <>
        <div className="gridItem1">
          <p className="greyTxt">{greyText1}</p>
          {pArray1.map((x, index) => (
            <p className="blueText" key={index}>
              {x}
            </p>
          ))}
        </div>
        <div className="gridItem2">
          <p className="greyTxt">{greyText2}</p>
          {pArray2.map((x, index) => (
            <p className="blueText" key={index}>
              {x}
            </p>
          ))}
        </div>
      </>
    );
  }
}

export default GridItem1;
