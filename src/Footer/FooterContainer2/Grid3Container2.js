import React, { Component } from "react";

class Grid3Container2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pArray: ["Watertown", "Wellesley Hills", "Weston", "Woburn"],
    };
  }

  render() {
    const { pArray } = this.state;
    return (
      <div className="gridItem3">
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

export default Grid3Container2;
