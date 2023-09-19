import "./App.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Foot/Footer";
import Carousel from "./components/carousel/carousel";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
function App() {
  // const buttonStyle = {
  //   background: "none",
  //   border: "0px",
  // };
  // const carousel_properties = {
  //   prevArrow: <button style={{ ...buttonStyle }}></button>,
  //   nextArrow: <button style={{ ...buttonStyle }}></button>,
  //   onStartChange: (oldIndex, newIndex) =>
  //     console.log(`slide transition from ${oldIndex} to ${newIndex}`),
  // };

  const itemheader = ["Roco WireLess Headphone", "Smart Digital Watch"];

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");
    if (swiperEl) {
      swiperEl.addEventListener("slidechange", (event) => {
        if (event.detail[0]["activeIndex"] === 0) {
          setActiveIndex(0);
        }
        if (event.detail[0]["activeIndex"] === 1) {
          setActiveIndex(1);
        }
      });
    }
  }, []);

  return (
    <div className="App">
      {/* Header section */}
      <header>{/* Place the header content here */}</header>

      {/* Main section */}
      <div className="main">
        <div className="main-navbar">
          <Navbar />
        </div>

        <div className="main-carousel">
          <div className="main-carousel-content">
            <span>
              <h1>{itemheader[activeIndex]}</h1>
              <p>this is a test</p>
            </span>
          </div>
          <Carousel />
        </div>
        <div className="content">
          <div className="content-browse">
            <h1 className="content-browse-title">
              <FontAwesomeIcon icon={faTags} color="#ff497c" /> Browse By
              Categories
            </h1>
            <div className="content-browse-categories">
              <h1>Cards</h1>
            </div>
          </div>
          <div className="content-items">
            <h1 className="content-items-title">
              <FontAwesomeIcon icon={faBasketShopping} color="#ff497c" /> Browse
              By Categories
            </h1>
            <div className="content-items-explore">
              <h1>Cards</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="main-footer">
        <div className="main-footer-content">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
