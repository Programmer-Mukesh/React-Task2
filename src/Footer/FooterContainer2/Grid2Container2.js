import React, { Component } from "react";

class Grid2Container2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pArray: ["Newton", "North Waltham", "Northwood", "Somerville"],
    };
  }

  render() {
    const { pArray } = this.state;
    return (
      <div className="gridItem2">
        <p className="greyTxt">
          <br />
        </p>
        {pArray.map((x, index) => (
          <p className="blueText" key={index}>
            {x}
          </p>
        ))}
      </div>
    );
  }
}

export default Grid2Container2;
