import React from "react";
import Golf from "../Image/golf6.png";
import "../Descriptions/golf20.scss";
import { Link } from "react-router-dom";

const golf20 = () => {
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
        <div className="golf20">
          <img src={Golf} width={250} height={180} alt="fifth-group"  />
        </div>
        <div className="details">
          <h2>Volkswagen Golf VI </h2>
          <p>
            The Golf 6 boasts a sleek and timeless design with clean lines and a
            sporty stance. Its aerodynamic profile not only enhances its visual
            appeal but also contributes to fuel efficiency.
            <br />
            <br />
            Car specifications: <br />
            Transmission: Manual 5-speed <br />
            Fuel: Diesel 2.0 <br />
            Tank Volume: 55l <br />
            Rear: Right <br />
            Year: 2009 <br />
            Top Speed: 203km/h <br />
            Number of doors: 5 <br /> <br />
            Renting a Golf 6 offers a versatile and reliable transportation
            solution for various travel needs. Whether you're planning a weekend
            getaway, a business trip, or simply need a stylish and comfortable
            car for everyday driving, the Golf 6 delivers on all fronts. Book
            now to experience the convenience and enjoyment of driving a Golf 6.
          </p>
        </div>
      </div>
     <Link to="/contact"> <div className="book">
        <button onClick={scrollToTop}>Book Now</button>
      </div>
      </Link>
    </div>
  );
};

export default golf20;
