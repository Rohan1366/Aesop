import React, { useEffect, useState } from "react";
import "./ImgSlider.scss";
import contentImg from "./../../img/contentImg.svg";
import sliderRightArrow from "./../../img/sliderRightArrow.png";
import sliderLeftArrow from "./../../img/sliderLeftArrow.png";

const ImgSlider = (props) => {
  const [currentImgSlide, setCurrenImgtSlide] = useState(0);
  const [slideLength, setSlideLength] = useState(props.imgs.length);
  useEffect(() => {
    const slide = document.querySelectorAll(".imgSlide");
    slide.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentImgSlide)}%)`;
    });
  }, [currentImgSlide]);

  const nextImgSlideHandler = () => {
    if (currentImgSlide >= slideLength - 1) {
      setCurrenImgtSlide(0);
      return;
    }
    setCurrenImgtSlide((prev) => prev + 1);
  };
  const prevImgSlideHandler = () => {
    if (currentImgSlide <= 0) {
      setCurrenImgtSlide(slideLength);
    }
    setCurrenImgtSlide((prev) => prev - 1);
  };
  return (
    <div className="mainImgSliderDiv">
      <div className="imgSlider">
        <div onClick={prevImgSlideHandler} className="sliderImgBtn leftSlideImgBtn">
          <img src={sliderLeftArrow} />
        </div>
        <div onClick={nextImgSlideHandler} className="sliderImgBtn rightSlideImgBtn">
          <img src={sliderRightArrow} />
        </div>
        {props.imgs.map((data, i) => (
          <div key={i} className="imgSlide">
            <img src={data.img} alt={`Photo-${i}`} />
          </div>
        ))}
      </div>
      <div className="sliderLine">
        {props.imgs.map((_, i) => (
          <div key={i} style={{ width: `${100 / slideLength}%` }} className={`${currentImgSlide === i ? "active" : ""} line`}></div>
        ))}
      </div>
      <p className="storeName">{props.imgs[currentImgSlide].name}</p>
    </div>
  );
};

export default ImgSlider;
