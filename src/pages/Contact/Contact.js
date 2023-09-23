import { Link } from "react-router-dom";
import Objective from "../../components/About&contact/Objective";
import "./Contact.css";
import { motion } from "framer-motion";

function Contact({ routeVariants, childVariants }) {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="contact"
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
              <li className="active">Contact</li>
            </ul>
          </div>
          <h1>Contact With Us</h1>
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
      <motion.div variants={childVariants} initial="initial" animate="final">
        <div className="container">
          <div className="form">
            <form action="#">
              <h2>We would love to hear from you.</h2>
              <p>
                If you’ve got great products your making or looking to work with
                us then drop us a line.
              </p>
              <div className="all-inputs">
                <div className="inputs-order">
                  <div className="labels">
                    <input type="text" name="Name" required />
                    <label htmlFor="Name">
                      Name<span> *</span>
                    </label>
                  </div>
                  <div className="labels">
                    <input type="tel" name="Phone" required />
                    <label htmlFor="phone">
                      Phone<span> *</span>
                    </label>
                  </div>
                  <div className="labels">
                    <input type="email" name="email" required />
                    <label htmlFor="email">
                      E-mail<span> *</span>
                    </label>
                  </div>
                </div>
                <div className="labels four">
                  <input type="text" name="message" />
                  <label htmlFor="message">Your Message</label>
                </div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="info">
            <h3>Our Store</h3>
            <p>District 1, Sheikh Zayed , Giza ,Egypt</p>
            <br />
            <p>Phone: +20 101 322 3173</p>
            <p>Email: Hello@logo.com</p>
            <br />
            <h3>Careers</h3>
            <p>Instead of buying six things, one that you really like.</p>
            <br />
            <h3>Opening Hours:</h3>
            <p>Saturday to Thursday: 9am - 10pm</p>
            <p>Fridays: 10am - 6pm</p>
          </div>
        </div>
      </motion.div>
      <div className="map">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              title="#"
              src="https://maps.google.com/maps?q=sheikh%20zayed&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
      <Objective />
    </motion.div>
  );
}

export default Contact;
