import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

function Navbar() {
  return (
    <div class="container text-center bg-white rounded-4 py-2 fs-5">
      <div class="navbar row justify-content-md-center">
        <div class="col col-lg-2">
          <h1>Logo</h1>
        </div>
        <div class="col">
          <ul class="list-group list-group-horizontal d-flex justify-content-center">
            <li class="col-xs-3 list-group-item">
              <a href="#">Home</a>
            </li>
            <li class="col-xs-3 list-group-item">
              <a href="#">Shop</a>
            </li>
            <li class="col-xs-3 list-group-item">
              <a href="#">Contact</a>
            </li>
            <li class="col-xs-3 list-group-item">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div class="col col-lg-2">
          <ul class="list-group list-group-horizontal d-flex justify-content-center">
            <li class="col-xs-3 list-group-item">
              <a href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li class="col-xs-3 list-group-item">
              <a href="#">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
            <li class="col-xs-3 list-group-item">
              <a href="#">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
