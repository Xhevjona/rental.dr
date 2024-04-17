import React from "react";
import Audi from "../Image/a3.png";
import "../Descriptions/audi.scss";
import { Link } from "react-router-dom";

const audi = () => {
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
        <div className="audi">
          <img src={Audi} width={250} height={200} alt="fifth-group"  />
        </div>
        <div className="details">
          <h2>Audi A3</h2>
          <p>
            Elevate your driving experience with the Audi A3, a compact luxury
            sedan that seamlessly combines style, comfort, and performance.
            <br />
            <br />
            Car specifications: <br />
            Transmission: Manual 5-speed <br />
            Fuel: Diesel 1.9 <br />
            Tank Volume: 55l <br />
            Year: 2005 <br />
            Rear: Right <br />
            Top Speed: 187km/h <br />
            Number of doors: 5 <br /> <br />
            Rent the Audi A3 today and experience the perfect blend of
            performance, efficiency, and technology. Contact us now to reserve
            your Audi A3 and elevate your driving experience to new heights.
          </p>
        </div>
      </div>
     <Link to="/contact" ><div className="book">
        <button onClick={scrollToTop}>Book Now</button>
      </div>
      </Link>
    </div>
  );
};

export default audi;
