import React from "react";
import "./NavLink.scss";

const NavLink = (props) => {
  return (
    <li style={{ color: props.type === "white" && "#FFFEF2" }} className="navItem">
      {props.text}
    </li>
  );
};

export default NavLink;
