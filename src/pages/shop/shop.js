import { Link } from "react-router-dom";
import "./shop.css";

function shop() {
  return (
    <div clasName="shop">
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
    </div>
  );
}

export default shop;
