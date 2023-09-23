import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPaypal,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="container text-center bg-white">
      <div className="footer d-grid gap-4">
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <h3>Support</h3>
                <p>
                  4 Mahmoud El-Meligy,
                  <br /> Ezbet El-Arab, Nasr City,
                  <br /> Cairo Governorate.
                </p>
              </li>
              <li className="list-group-item">
                <a href="mailto:example@domain.com">
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
              </li>
              <li className="list-group-item">
                <a href="tel:(+02) 24055739">
                  <FontAwesomeIcon icon={faPhone} /> Phone
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <h3>Account</h3>
                <a href="#">My Account</a>
              </li>
              <li className="list-group-item">
                <a href="#">Login / Register</a>
              </li>
              <li className="list-group-item">
                <a href="#">Cart</a>
              </li>
              <li className="list-group-item">
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <h3>Quick Link</h3>

                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-group-item">
                <a href="#">Terms Of Use</a>
              </li>
              <li className="list-group-item">
                <a href="#">FAQ</a>
              </li>
              <li className="list-group-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center fs-5">
              <a className="me-2" href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="me-2" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="me-2" href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="col">
            <p>© 2023. All rights reserved.</p>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center fs-5">
              <FontAwesomeIcon className="me-2" icon={faPaypal} />
              <FontAwesomeIcon className="me-2" icon={faCcMastercard} />
              <FontAwesomeIcon className="me-2" icon={faCcVisa} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
