import Carousel from "../../components/carousel/carousel";
import Objective from "../../components/About&contact/Objective";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Card from "../../components/card/card";
import { Link } from "react-router-dom";

import laptop from "../../Assets/Images/laptop.png";
import pc from "../../Assets/Images/Pc.png";
import accesories from "../../Assets/Images/accessories.png";
import monitor from "../../Assets/Images/monitor.png";
import "./home.css";

function Home({ routeVariants, products }) {
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
                <button className="btn btn-default btn-lg btn-block responsive-width">
                  <h5>Shop Now</h5>
                </button>
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
            <FontAwesomeIcon icon={faTags} color="#ff497c" />
            Browse By Categories
          </h1>

          <div className="content-browse-categories col">
            <div className="category">
              <ul className="list-group list-group-horizontal d-flex justify-content-center">
                <li className="list-group-item">
                  <div className="category-item">
                    <div className="category-img">
                      <img src={laptop} alt="" />
                    </div>
                    <div className="category-txt">
                      <h5>Laptop</h5>
                    </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="category-item">
                    <div className="category-img">
                      <img src={pc} alt="" />
                    </div>
                    <div className="category-txt">
                      <h5>Computer</h5>
                    </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="category-item">
                    <div className="category-img">
                      <img src={monitor} alt="" />
                    </div>
                    <div className="category-txt">
                      <h5>Monitor</h5>
                    </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="category-item">
                    <div className="category-img">
                      <img src={accesories} alt="" />
                    </div>
                    <div className="category-txt">
                      <h5>Accesories</h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-items">
          <h1 className="content-items-title">
            <FontAwesomeIcon icon={faBasketShopping} color="#ff497c" />
            Explore Our Products
          </h1>
          <div className="content-items-explore row justify-content-start">
            <Card items={products} maxItems="12" />
          </div>
        </div>
      </div>
      <div className="home-ob">
        <Objective />
      </div>
    </motion.div>
  );
}

export default Home;
