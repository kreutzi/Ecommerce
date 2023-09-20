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
    <div className="footer">
      <div className="footer-up">
        <div className="footer-up-contanet">
          <ul>
            <li>
              <h3>Support</h3>
              <p>
                4 Mahmoud El-Meligy,
                <br /> Ezbet El-Arab, Nasr City,
                <br /> Cairo Governorate.
              </p>
            </li>
            <li>
              <a href="mailto:example@domain.com">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
            </li>
            <li>
              <a href="tel:(+02) 24055739">
                <FontAwesomeIcon icon={faPhone} /> Phone
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-up-contanet">
          <ul>
            <li>
              <h3>Account</h3>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Login / Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className="footer-up-contanet">
          <ul>
            <li>
              <h3>Quick Link</h3>

              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-down">
        <div className="footer-down-contanet">
          <div className="footer-down-contanet-social">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="footer-down-contanet">
          <p>© 2023. All rights reserved.</p>
        </div>
        <div className="footer-down-contanet">
          <div className="footer-down-contanet-cc">
            <FontAwesomeIcon icon={faPaypal} />
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faCcVisa} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
