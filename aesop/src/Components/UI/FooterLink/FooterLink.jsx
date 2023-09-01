import React from "react";
import "./FooterLink.scss";
import footerlinkArrow from "./../../../img/footerlinkArrow.svg";

const FooterLink = (props) => {
  return (
    <p className="footerLink">
      {props.text} {props.arrow && <img src={footerlinkArrow} className="footLinkArrow" />}
    </p>
  );
};

export default FooterLink;
