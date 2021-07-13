import React from "react";

const NavItem = ({items, classN}) => (
  <div>
    {items.map((x, index) => (
      <a href="#" className={classN} key={index}>
        {x}
      </a>
    ))}
  </div>
);

export default NavItem;
