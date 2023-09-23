import Carousel from "../../components/carousel/carousel";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Card from "../../components/card/card";
import "./home.css";
import { Link } from "react-router-dom";

function Home({ routeVariants }) {
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
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="home"
    >
      <div className="seperate"></div>
      <div className="main-carousel row top-buffer carousel-bg">
        <div className="row">
          <div className="main-carousel-content col my-auto" key={activeIndex}>
            <span className="col text-center">
              <h1>{itemheader[activeIndex]}</h1>
              <Link
                className="link d-flex justify-content-center"
                to="/contact"
              >
                <button>Shop Now</button>
              </Link>
            </span>
          </div>
          <div className="col-md-6 ms-auto">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="content row">
        <div className="content-browse col">
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
          <div className="content-items-explore row justify-content-start ">
            <Card className="col-3" />
            <Card className="col-3" />
            <Card className="col-3" />
            <Card className="col-3" />
          </div>
          <div className="content-items-explore row justify-content-start ">
            <Card className="col-3" />
            <Card className="col-3" />
            <Card className="col-3" />
            <Card className="col-3" />
          </div>
          <div className="content-items-explore row justify-content-start ">
            <Card className="col-3" />
            <Card className="col-3" />
            <Card className="col-3" />
            <Card className="col-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
