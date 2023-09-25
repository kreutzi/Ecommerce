import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="container text-center bg-white rounded-4 py-2 fs-5">
      <div className="navbar row justify-content-md-center">
        <div className="col col-lg-2">
          <h1 className="cool-txt">BmyZ</h1>
        </div>
        <div className="col">
          <ul className="list-group list-group-horizontal d-flex justify-content-center ha">
            <li className="list-group-item h">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-group-item h">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="list-group-item h">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="list-group-item h">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="col col-lg-2">
          <ul className="list-group list-group-horizontal d-flex justify-content-center">
            <li className="list-group-item">
              <a href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li className="list-group-item">
              <NavLink to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </li>
            <li className="list-group-item">
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
