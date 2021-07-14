import React from "react";
import SocialLogos from "./join us.png";
import FooterDesc from "./FooterDesc";
import GridContent from "./GridContent";

const GridItems = () => {
  const greyText1 = "Company";
  const pArray1 = [
    "About Us",
    "Investor Relations",
    "Sheila's Blog",
    "Help",
    "Safety Center",
    "Careers",
  ];
  const greyText2 = "Popular in Child Care";
  const pArray2 = [
    "Babysitters",
    "Nannies",
    "Child Care",
    "Babysitting jobs",
    "Nanny Jobs",
  ];
  const greyText3 = "Care.com in My Town";
  const pArray3 = ["Boston", "Brighton", "Brookline", "Chestnut Hill"];
  const pArray4 = ["Newton", "North Waltham", "Northwood", "Somerville"];
  const pArray5 = ["Watertown", "Wellesley Hills", "Weston", "Woburn"];
  const greyText6 = "Discover";
  const pArray6 = [
    "HomePay",
    "Advertising",
    "Employee Benefits Programs",
    "Terms of Use",
    "Privacy Policy",
    "Care Directory",
  ];

  return (
    <>
      <div className="footerContainer1">
        <div className="gridItem1">
          <GridContent heading={greyText1} subheadings={pArray1} />
        </div>
        <div className="gridItem2">
          <GridContent heading={greyText2} subheadings={pArray2} />
        </div>
        <div className="gridItem3">
          <p className="greyTxt">Join us on</p>
          <img src={SocialLogos} alt="join us" />
        </div>
      </div>

      <div className="footerContainer2">
        <div className="container2Item1">
          <GridContent heading={greyText3} subheadings={pArray3} />
        </div>
        <div className="gridItem2">
          <br />
          <GridContent subheadings={pArray4} />
        </div>
        <div className="gridItem3">
          <br />
          <GridContent subheadings={pArray5} />
        </div>
      </div>

      <div className="footerContainer3">
        <div className="gridItem1">
          <GridContent heading={greyText6} subheadings={pArray6} />
        </div>
        <FooterDesc />
      </div>
    </>
  );
};

export default GridItems;
