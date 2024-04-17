import React from "react";
import Jetta from "../Image/jetta.png";
import "../Descriptions/jetta.scss";
import { Link } from "react-router-dom";

const jetta = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Link to="/"><div className="back">
        <button className="back" onClick={scrollToTop}>⇦</button>
      </div>
      </Link>
      <div className="container">
        <div className="jetta">
          <img src={Jetta} width={280} height={180} alt="fifth-group"  />
        </div>
        <div className="details">
          <h2>Volkswagen Jetta </h2>
          <p>
            The Volkswagen Jetta exudes a refined and sophisticated presence on
            the road. Its clean lines, contoured body, and bold front grille
            make a statement wherever it goes.
            <br />
            <br />
            Car specifications: <br />
            Transmission: Automatic 2.5 <br />
            Fuel: Petrol(Gasoline) <br />
            Tank Volume: 55l <br />
            Rear: Right <br />
            Year: 2010 <br />
            Top Speed: 204km/h <br />
            Number of doors: 5 <br /> <br />
            Renting a Volkswagen Jetta offers a practical and stylish
            transportation solution for various travel needs. Whether you're
            traveling solo, with family, or on business, the Jetta provides
            comfort, reliability, and versatility for any journey. Book now to
            experience the comfort and sophistication of driving a Jetta.
          </p>
        </div>
      </div>
      <Link to="/contact"><div className="book">
        <button onClick={scrollToTop}>Book Now</button>
      </div>
      </Link>
    </div>
  );
};

export default jetta;
