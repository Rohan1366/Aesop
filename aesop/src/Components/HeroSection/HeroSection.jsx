import React from "react";
import "./HeroSection.scss";
import logo from "./../../img/logo.svg";
import MainButton from "../UI/MainButton/MainButton";
import heroImg from "./../../img/heroImg.svg";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <img className="heroImg" src={heroImg} />
      <div className="heroContentDiv">
        <img className="heroLogo" src={logo} />
        <div className="heroTextDiv">
          <p className="hereSubHeader">Bar Soaps</p>
          <h1 className="heroHeader">A body care classic, reimagined</h1>
          <p className="heroPara">Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
          <MainButton type={true} text={"Discover Bar Soaps"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
