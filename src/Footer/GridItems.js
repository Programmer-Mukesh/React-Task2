import React, { Component } from "react";
import SocialLogos from "./join us.png";
import FooterDesc from "./FooterDesc";

class GridItems extends Component {
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
      greyText3: "Care.com in My Town",
      pArray3: ["Boston", "Brighton", "Brookline", "Chestnut Hill"],
      pArray4: ["Newton", "North Waltham", "Northwood", "Somerville"],
      pArray5: ["Watertown", "Wellesley Hills", "Weston", "Woburn"],
      greyText6: "Discover",
      pArray6: [
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
    const {
      greyText1,
      pArray1,
      greyText2,
      pArray2,
      greyText3,
      pArray3,
      pArray4,
      pArray5,
      greyText6,
      pArray6,
    } = this.state;

    return (
      <>
        <div className="footerContainer1">
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
          <div className="gridItem3">
            <p className="greyTxt">Join us on</p>
            <img src={SocialLogos} alt="join us" />
          </div>
        </div>

        <div className="footerContainer2">
          <div className="container2Item1">
            <p className="greyTxt">{greyText3}</p>
            {pArray3.map((x, index) => (
              <p className="blueText" key={index}>
                {x}
              </p>
            ))}
          </div>
          <div className="gridItem2">
            <p className="greyTxt">
              <br />
            </p>
            {pArray4.map((x, index) => (
              <p className="blueText" key={index}>
                {x}
              </p>
            ))}
          </div>
          <div className="gridItem3">
            <p className="greyTxt">
              <br />
            </p>
            {pArray5.map((x, index) => (
              <p className="blueText" key={index}>
                {x}
              </p>
            ))}
          </div>
        </div>

        <div className="footerContainer3">
          <div className="gridItem1">
            <p className="greyTxt">{greyText6}</p>
            {pArray6.map((x, index) => (
              <p className="blueText" key={index}>
                {x}
              </p>
            ))}
          </div>
          <FooterDesc />
        </div>
      </>
    );
  }
}

export default GridItems;
