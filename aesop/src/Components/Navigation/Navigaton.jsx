import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import NavLink from "../UI/NavLink/NavLink";
import search from "./../../img/search.svg";
import whiteSearch from "./../../img/searchWhite.svg";

import logo from "./../../img/logo.svg";
import logoBlack from "./../../img/logoBlack.svg";

import whiteHam from "./../../img/whiteHam.png";
import blackHam from "./../../img/blackHam.png";
import whiteHeart from "./../../img/whiteHeart.png";
import blackHeart from "./../../img/blackHeart.png";

const navItemSet1 = [
  { id: "l1", title: "Skin Care" },
  { id: "l2", title: "Body & Hand" },
  { id: "l3", title: "Hair" },
  { id: "l4", title: "Fragrance" },
  { id: "l5", title: "Home" },
  { id: "l6", title: "Kits & Travel" },
  { id: "l7", title: "Gifts" },
  { id: "l8", title: "Read" },
  { id: "l9", title: "Stores" },
  { id: "l10", title: "Facial AppointMent" },
];
const navItemSet2 = [
  { id: "l11", title: "Login" },
  { id: "l12", title: "Cabinet" },
  { id: "l13", title: "Cart" },
];

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos <= 100) {
      setVisible(true);
    } else {
      setVisible(prevScrollPos > currentScrollPos);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navigation ${visible ? "visible" : "hidden"} ${prevScrollPos > 100 ? "fixed" : ""}`}>
      <img className="navLogo" src={prevScrollPos > 100 ? logoBlack : logo} />
      <div className="mobileNavItems">
        <img className="mobileNavIcon" src={prevScrollPos > 100 ? search : whiteSearch} />
        <img className="mobileNavIcon" src={prevScrollPos > 100 ? blackHeart : whiteHeart} />
        <NavLink type={prevScrollPos > 100 ? "" : "white"} text={"Cart"} />
        <img className="mobileNavIcon" src={prevScrollPos > 100 ? blackHam : whiteHam} />
      </div>
      <ul className="navItems">
        {navItemSet1.map((nav) => (
          <NavLink key={nav.id} text={nav.title} />
        ))}
        <img alt="search" className="searchIcon" src={search} />
      </ul>
      <ul className="navItems">
        {navItemSet2.map((nav) => (
          <NavLink key={nav.id} text={nav.title} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
