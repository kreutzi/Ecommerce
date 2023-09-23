import objective1 from "../../Assets/Images/obj1.png";
import objective2 from "../../Assets/Images/obj2.png";
import objective3 from "../../Assets/Images/obj3.png";
import objective4 from "../../Assets/Images/obj4.png";
import "./Objective.css";

function objective() {
  return (
    <div className="objective">
      <ul>
        <li>
          <div className="objective-img">
            <img src={objective1} alt="" />
          </div>
          <div className="objective-txt">
            <h6>Fast & Secure Delivery</h6>
            <p>Tell about your service.</p>
          </div>
        </li>
        <li>
          <div className="objective-img">
            <img src={objective2} alt="" />
          </div>
          <div className="objective-txt">
            <h6>Money Back Guarantee</h6>
            <p>Within 10 days.</p>
          </div>
        </li>
        <li>
          <div className="objective-img">
            <img src={objective3} alt="" />
          </div>
          <div className="objective-txt">
            <h6>24 Hour Return Policy</h6>
            <p>No question ask.</p>
          </div>
        </li>
        <li>
          <div className="objective-img">
            <img src={objective4} alt="" />
          </div>
          <div className="objective-txt">
            <h6>Pro Quality Support</h6>
            <p>24/7 Live support.</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default objective;
