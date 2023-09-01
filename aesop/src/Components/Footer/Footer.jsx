import React from "react";
import "./Footer.scss";
import sendBtn from "./../../img/sendBtn.svg";
import FooterLink from "../UI/FooterLink/FooterLink";
import twitter from "./../../img/twitter.svg";
import linkedIm from "./../../img/linkedin.svg";
import instagram from "./../../img/instagram.svg";
const orderSupport = [
  {
    id: "f1",
    arrow: true,
    text: "Contact us",
  },
  {
    id: "f2",
    arrow: true,
    text: "FAQs",
  },
  {
    id: "f3",
    arrow: true,
    text: "Shipping",
  },
  {
    id: "f4",
    arrow: true,
    text: "Return",
  },
  {
    id: "f5",
    arrow: false,
    text: "Order History",
  },
  {
    id: "f6",
    arrow: false,
    text: "Terms and condition",
  },
];
const services = [
  {
    id: "f7",
    arrow: false,
    text: "Live assistance",
  },
  {
    id: "f8",
    arrow: false,
    text: "Corporate gifts",
  },
  {
    id: "f9",
    arrow: false,
    text: "Facial Appointment",
  },
  {
    id: "f10",
    arrow: false,
    text: "Click and Collect",
  },
  {
    id: "f11",
    arrow: false,
    text: "Video consultation",
  },
];
const about = [
  {
    id: "f12",
    arrow: false,
    text: "Our story",
  },
  {
    id: "f13",
    arrow: false,
    text: "Foundation",
  },
  {
    id: "f14",
    arrow: false,
    text: "Careers",
  },
  {
    id: "f15",
    arrow: false,
    text: "Privacy policy",
  },
  {
    id: "f16",
    arrow: false,
    text: "Accessibility",
  },
  {
    id: "f17",
    arrow: false,
    text: "Cookie Policy",
  },
];
const social = [
  {
    id: "f18",
    arrow: true,
    text: "Instagram",
  },
  {
    id: "f19",
    arrow: true,
    text: "Twitter",
  },
  {
    id: "f20",
    arrow: true,
    text: "LinkedIn",
  },
  {
    id: "f21",
    arrow: true,
    text: "WeChat",
  },
  {
    id: "f22",
    arrow: true,
    text: "Weibo",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletterMainDiv">
        <div className="newsletter">
          <h2 className="footerSubHeader">Subscribe to Aesop communications</h2>
          <div className="newsletterInputDiv">
            <input placeholder="Email address" className="newsletterInput" type="text" name="" id="" />
            <img src={sendBtn} className="sendBtn" alt="" />
          </div>
          <div className="newsLetterCheckBoxDiv">
            <input className="newsLetterCheckBox" type="checkbox" name="" id="" />
            <p className="newsLetterText">
              Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <span>privacy policy.</span>
            </p>
          </div>
        </div>
        <div>
          <h2 className="footerSubHeader">Order and support</h2>
          {orderSupport.map((link) => (
            <FooterLink key={link.id} text={link.text} arrow={link.arrow} />
          ))}
        </div>
        <div>
          <h2 className="footerSubHeader">Services</h2>
          {services.map((link) => (
            <FooterLink key={link.id} text={link.text} arrow={link.arrow} />
          ))}
        </div>
        <div className="locationDiv">
          <h2 className="footerSubHeader">Location preferences</h2>
          <div className="locationSubDiv">
            <h2 className="locationSubheader">Shipping:</h2>
            <p className="locationSubCategory">Hong Kong SAR, China</p>
          </div>
          <div>
            <h2 className="locationSubheader">Languages:</h2>
            <p className="locationSubCategory">English</p>
            <p className="locationSubCategory" style={{ textDecoration: "none" }}>
              繁體中文
            </p>
          </div>
        </div>
        <div className="sustabilityDiv">
          <h2 className="footerSubHeader">Sustainability</h2>
          <p className="sustabilityText">
            All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.<span> Learn more</span>
          </p>
        </div>
        <div>
          <h2 className="footerSubHeader">About</h2>
          {about.map((link) => (
            <FooterLink key={link.id} text={link.text} arrow={link.arrow} />
          ))}
        </div>
        <div className="socialDiv">
          <h2 className="footerSubHeader">Social media</h2>
          {social.map((link) => (
            <FooterLink key={link.id} text={link.text} arrow={link.arrow} />
          ))}
        </div>
      </div>
      <div className="bottomNav">
        <h2 className="copyright">© Aesop</h2>
        <div className="socialLinkDiv">
          <img src={instagram} alt="instagram" className="socialLink" />
          <img src={twitter} alt="twitter" className="socialLink" />
          <img src={linkedIm} alt="linkedIm" className="socialLink" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
