import React, { Component } from "react";

class Grid1Container2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greyText: "Care.com in My Town",
      pArray: ["Boston", "Brighton", "Brookline", "Chestnut Hill"],
    };
  }

  render() {
    const { greyText, pArray } = this.state;
    return (
      <div className="container2Item1">
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

export default Grid1Container2;
