import logo from "./logo.svg";
import "./App.css";
import ConsultationNav from "./Components/ConsultationNav/ConsultaltionNav";
import PromotionalNav from "./Components/PromotionalNav/PromotionalNav";
import Navigation from "./Components/Navigation/Navigaton";
import HeroSection from "./Components/HeroSection/HeroSection";
import SlideSection from "./Components/SliderSection/SlideSection";
import ContentSection from "./Components/ContentSection/ContentSection";
import QuoteSection from "./Components/QuoteSection/QuoteSection";
import Footer from "./Components/Footer/Footer";
import store1 from "./img/store1.jpg";
import store2 from "./img/store2.jpg";
import store3 from "./img/store3.jpg";
import product1 from "./img/product1.svg";
import product2 from "./img/product2.svg";
import product3 from "./img/product.svg";
import content2img from "./img/content2img.svg";
import content1 from "./img/content1.svg";
import soup1 from './img/soup1.png'
import soup2 from './img/soup2.png'
import soup3 from './img/soup3.png'
import skin1 from './img/skin1.png'
import skin2 from './img/skin2.png'
import skin3 from './img/skin3.png'
import skin4 from './img/skin4.png'
import skin5 from './img/skin5.png'
const contentSectionData3 = {
  title: "Store Locator",
  subHeader: "",
  description: "Our consultants are available to host you in-store and provide tailored guidance on gift purchases.",
  buttonText: "Find a nearby store",
  imgs: [
    { name: "Aesop Fashion Walk", img: store1 },
    { name: "Aesop MOKO", img: store2 },
    { name: "Aesop ifc mall", img: store3 },
  ],
};
const contentSectionData2 = {
  title: "Post-Poo Drops has returned",
  subHeader: "",
  description: "Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.",
  buttonText: "Discover Post-Poo Drops ",
  imgs: [],
  img: content2img,
};
const contentSectionData1 = {
  title: "The warm-up",
  subHeader: "The Athenaeum",
  description: "In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.",
  buttonText: "Read More",
  imgs: [],
  img: content1,
};
const sliderSectionData3 = {
  title: "Domestic pleasures",
  subHeader: "For the home",
  description: "Our range of aromatic formulations for the home are practical and pleasing in equal measure.",
  buttonText: "See all Home",
  products: [
    { name: "Post-Poo Drops", description: "A botanical bathroom deodoriser", img: product1 },
    { name: "Aganice Aromatique Candle", description: "Cardamom, Mimosa, Tobacco", img: product2 },
    { name: "Ptolemy Aromatique Candle", description: "A sensuous blend of leather, smoke and wood", img: product3 },
    { name: "Post-Poo Drops", description: "A botanical bathroom deodoriser", img: product1 },
    { name: "Aganice Aromatique Candle", description: "Cardamom, Mimosa, Tobacco", img: product2 },
    { name: "Ptolemy Aromatique Candle", description: "A sensuous blend of leather, smoke and wood", img: product3 },
    { name: "Post-Poo Drops", description: "A botanical bathroom deodoriser", img: product1 },
    { name: "Aganice Aromatique Candle", description: "Cardamom, Mimosa, Tobaccoo", img: product2 },
  ],
};
const sliderSectionData2 = {
  title: "Attention for all types",
  subHeader: "For the skin",
  description: "The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.",
  buttonText: "See all Skin care",
  products: [
    { name: "Post-Poo Drops", description: "A botanical bathroom deodoriser", img: skin1 },
    { name: "Aganice Aromatique Candle", description: "Cardamom, Mimosa, Tobacco", img: skin2 },
    { name: "Ptolemy Aromatique Candle", description: "A sensuous blend of leather, smoke and wood", img: skin3 },
    { name: "Post-Poo Drops", description: "A botanical bathroom deodoriser", img: product1 },
    { name: "Aganice Aromatique Candle", description: "Cardamom, Mimosa, Tobacco", img: skin4 },
    { name: "Ptolemy Aromatique Candle", description: "A sensuous blend of leather, smoke and wood", img: skin5 },
    { name: "Post-Poo Drops", description: "A botanical bathroom deodoriser", img: product1 },
    { name: "Aganice Aromatique Candle", description: "Cardamom, Mimosa, Tobacco", img: product2 },
    { name: "Aganice Aromatique Candle", description: "Cardamomm, Mimosa, Tobacco", img: product2 },
  ],
};
const sliderSectionData1 = {
  title: "An expression of care",
  subHeader: "For the body",
  description: "Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.",
  buttonText: "See all Body Care",
  products: [
    { name: "Post-Poo Drops", description: "A botanical bathroom deodoriser", img: soup1 },
    { name: "Aganice Aromatique Candle", description: "Cardamom, Mimosa, Tobacco", img: soup2 },
    { name: "Ptolemy Aromatique Candle", description: "A sensuous blend of leather, smoke and wood", img: soup3 },
  ],
};
function App() {
  return (
    <div className="App">
      <ConsultationNav />
      <PromotionalNav />

      <div className="nav-div">
      <HeroSection />
      <Navigation />
      </div>
      <SlideSection slider={1} data={sliderSectionData1} />
      <ContentSection data={contentSectionData1} />
      <SlideSection data={sliderSectionData2} slider={2} />
      <ContentSection data={contentSectionData2} reverse={true} />
      <SlideSection data={sliderSectionData3} slider={3} />
      <ContentSection data={contentSectionData3} />
      <QuoteSection />
      <Footer />
    </div>
  );
}

export default App;
