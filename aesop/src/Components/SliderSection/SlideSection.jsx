import React, { useEffect, useState } from "react";
import "./SlideSection.scss";
import blackArrow from "./../../img//blackArrow.svg";
import product from "./../../img/product.svg";
import sliderRightArrow from "./../../img/sliderRightArrow.png";
import sliderLeftArrow from "./../../img/sliderLeftArrow.png";

const SlideSection = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numberOfSlide, setNumberOfSlide] = useState(props.data.products.length);
  // const [totalNumberOfClick, setTotalNumberOfClick] = useState(0);
  useEffect(() => {
    const slide = document.querySelectorAll(`${window.innerWidth < 600 ? ".mobileSlider" : ".desktopSlider"} .slide-${props.slider}`);

    slide.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  }, [currentSlide]);

  const nextSlideHandler = () => {
    if (currentSlide >= numberOfSlide - 2) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => prev + 1);
  };
  const prevSlideHandler = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(numberOfSlide - 1);
    }
    setCurrentSlide((prev) => prev - 1);
  };
  return (
    <section className="sliderSection">
      <div className="slider desktopSlider">
        <div onClick={prevSlideHandler} className="sliderBtn leftSlideBtn">
          <img src={sliderLeftArrow} />
        </div>
        <div onClick={nextSlideHandler} className="sliderBtn rightSlideBtn">
          <img src={sliderRightArrow} />
        </div>

        <div className={`slide-${props.slider} slide textSlider`}>
          <p className="textSubHeader">{props.data.subHeader}</p>
          <h2 className="textHeader">{props.data.title}</h2>
          <p className="textPara">{props.data.description}</p>
          <div className="textBtn">
            <p>{props.data.buttonText}</p>
            <img src={blackArrow} alt="arrow" className="textBtnArrow" />
          </div>
        </div>
        {props.data.products.map((product, i) => (
          <div key={i} className={`slide-${props.slider} slide productSlide`}>
            <img src={product.img} alt="product" className="productImg" />
            <h2 className="productName">{product.name}</h2>
            <p className="productPara">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="mobileSlider">
        <div className={`slide textSlider`}>
          <p className="textSubHeader">{props.data.subHeader}</p>
          <h2 className="textHeader">{props.data.title}</h2>
          <p className="textPara">{props.data.description}</p>
          <div className="textBtn">
            <p>{props.data.buttonText}</p>
            <img src={blackArrow} alt="arrow" className="textBtnArrow" />
          </div>
        </div>
        <div className="slider">
          <div onClick={prevSlideHandler} className="sliderBtn leftSlideBtn">
            <img src={sliderLeftArrow} />
          </div>
          <div onClick={nextSlideHandler} className="sliderBtn rightSlideBtn">
            <img src={sliderRightArrow} />
          </div>

          {props.data.products.map((product, i) => (
            <div key={i} className={`slide-${props.slider} slide productSlide`}>
              <img src={product.img} alt="product" className="productImg" />
              <h2 className="productName">{product.name}</h2>
              <p className="productPara">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="sliderDetection">
        {Array.from({ length: numberOfSlide - 1 }, (_, index) => index).map((sl, i) => (
          <div key={i} style={{ width: `${100 / (numberOfSlide - 1)}%` }} className={`${currentSlide === i ? "active" : ""} line`}></div>
        ))}
      </div>
    </section>
  );
};

export default SlideSection;
