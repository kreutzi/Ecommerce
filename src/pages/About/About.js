import { Link } from "react-router-dom";
import "./About.css";
import shopping from "../../Assets/Images/Shopping img.png";
import cards1 from "../../Assets/Images/cards_logo1.png";
import cards2 from "../../Assets/Images/cards_logo2.png";
import cards3 from "../../Assets/Images/cards_logo3.png";
import feature1 from "../../Assets/Images/features1.jpg";
import feature3 from "../../Assets/Images/features3.jpg";
import Objective from "../../components/About&contact/Objective";
import { motion } from "framer-motion";

// import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function About({ routeVariants, childVariants }) {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="about"
    >
      <div className="row seperate"></div>
      <div className="header">
        <div className="header-txt">
          <div className="page">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>|</li>
              <li className="active">About Us</li>
            </ul>
          </div>
          <h1>About Our Store</h1>
        </div>
        <div className="headerImg"></div>
      </div>
      <div className="shopping">
        <div className="shopping-img">
          <img src={shopping} alt="" />
        </div>
        <div className="shopping-txt">
          <h4>About Store</h4>
          <motion.div
            variants={childVariants}
            initial="initial"
            animate="final"
          >
            <h2>Online shopping includes both buying things online.</h2>
            <p>
              Salesforce B2C Commerce can help you create unified, intelligent
              digital commerce experiences — both online and in the store.
            </p>
            <ul>
              <li>
                Empower your sales teams with industry tailored solutions that
                support manufacturers as they go digital, and adapt to changing
                markets & customers faster by creating new business.
              </li>
              <li>
                Salesforce B2B Commerce offers buyers the seamless, self-service
                experience of online shopping with all the B2B
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="card">
        <div className="card_pos">
          <div className="cards">
            <img src={cards1} alt="" />
            <h5>40,000+ Happy Customer</h5>
            <p>
              Empower your sales teams with industry tailored solutions that
              support.
            </p>
          </div>
          <div className="cards">
            <img src={cards2} alt="" />
            <h5>16 Years of Experiences</h5>
            <p>
              Empower your sales teams with industry tailored solutions that
              support.
            </p>
          </div>
          <div className="cards">
            <img src={cards3} alt="" />
            <h5>12 Awards Won</h5>
            <p>
              Empower your sales teams with industry tailored solutions that
              support.
            </p>
          </div>
        </div>
      </div>
      <div className="team">
        <h6>Our Team</h6>
        <h2>Expart Management Team</h2>
      </div>
      <div className="feature">
        <div className="features">
          <div className="features-img">
            <img src={feature1} alt="" />
          </div>
          <div className="features-txt">
            <h6>Features #01</h6>
            <h1>Solutions that work together</h1>
            <p>
              Publish your eCommerce site quickly with our easy-to-use store
              builder— no coding required. Migrate your items from your point of
              sale system or turn your Instagram feed into a shopping site and
              start selling fast. Square Online works for all kinds of
              businesses—retail, restaurants, services.
            </p>
            <Link to="/contact">
              <button>Get In Touch</button>
            </Link>
          </div>
        </div>
        <div className="features">
          <div className="features-txt">
            <h6>Features #01</h6>
            <h1>Solutions that work together</h1>
            <p>
              Publish your eCommerce site quickly with our easy-to-use store
              builder— no coding required. Migrate your items from your point of
              sale system or turn your Instagram feed into a shopping site and
              start selling fast. Square Online works for all kinds of
              businesses—retail, restaurants, services.
            </p>
            <Link to="/contact">
              <button>Get In Touch</button>
            </Link>
          </div>
          <div className="features-img">
            <img src={feature3} alt="" />
          </div>
        </div>
      </div>
      <div className="email">
        <h6>Newsletter</h6>
        <h1>Get weekly update</h1>
        <div className="emails">
          <input type="email" name="email" placeholder="example@gmail.com" />
          <button>Subscribe</button>
        </div>
      </div>
      <Objective />
    </motion.div>
  );
}

export default About;
