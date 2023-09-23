import Navbar from "../../components/nav/Navbar";
import Carousel from "../../components/carousel/carousel";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Home() {
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
    <div className="Home">
      <div className="main-navbar w-100"></div>
      <div className="row seperate"></div>

      <div className="main-carousel row top-buffer carousel-bg">
        <div className="main-carousel-content col my-5">
          <span className="col">
            <h1>{itemheader[activeIndex]}</h1>
            <p>this is a test</p>
          </span>
        </div>
        <div className="col">
          <Carousel />
        </div>
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
      {/* Footer section */}
    </div>
  );
}

export default Home;
