import React from "react";
import "./ContentSection.scss";
import MainButton from "../UI/MainButton/MainButton";
import contentImg from "./../../img/contentImg.svg";
import ImgSlider from "../ImgSlider/ImgSlider";

const ContentSection = (props) => {
  return (
    <section className={`${props.reverse && "resverSection"} contentSection`}>
      <div className="contentTextDiv">
        {props.data.subheader && <p className="contentSubHeader">{props.data.subheader}</p>}

        <h2 className="contentHeader">{props.data.title}</h2>
        <p className="contentPara">{props.data.description}</p>
        <div className="contentBtnDiv">
          <MainButton type={false} text={props.data.buttonText} />
        </div>
      </div>

      {props.data.imgs.length ? <ImgSlider imgs={props.data.imgs} /> : <img src={props.data.img} className="contentImg" />}
    </section>
  );
};

export default ContentSection;
