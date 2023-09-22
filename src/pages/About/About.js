import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="About">
      <div className="row seperate"></div>

      <div className="header">
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
    </div>
  );
}

export default About;
