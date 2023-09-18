import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>Logo</h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
