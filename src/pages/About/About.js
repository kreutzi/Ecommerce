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
        <div className="headerImg">
          <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0b5567"
              d="M105.506 103.661c18.26 14.599 29.96-28.993.865-37.03-24.416-6.765-48.984 4.833-73.602 31.893 0 0 45.473-16.633 72.737 5.137z"
            />
            <path
              fill="#15a9ce"
              d="M33.176 98.168c17.498-18.159 46.593-38.403 73.704-30.926 6.307 1.78 10.783 5.442 13.683 9.817l-25.637-51.73c-3.662-5.85-13.021-4.629-18.311-.153L8.862 81.942c-6.155 5.29-6.51 14.7-.814 20.397 5.036 5.036 13.022 5.493 18.566 1.017z"
            />
          </svg>
        </div>
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
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
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
