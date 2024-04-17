import React from "react";
import Passat from "../Image/passat.png";
import "../Descriptions/passat.scss";
import { Link } from "react-router-dom";
const passat = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
     <Link to="/"> <div className="back">
        <button className="back" onClick={scrollToTop}>⇦</button>
      </div>
      </Link>
      <div className="container">
        <div className="passat">
          <img src={Passat} width={280} height={230} alt="fifth-group"  />
        </div>
        <div className="details">
          <h2>Volkswagen Passat Premium Plus </h2>
          <p>
            The Volkswagen Passat commands attention with its refined styling
            and understated elegance. Its sleek silhouette, bold front grille,
            and sculpted lines exude a sense of sophistication and confidence on
            the road.
            <br />
            <br />
            Car specifications: <br />
            Transmission: Automatic 6-speed <br />
            Fuel: Petrol(Gasoline) 2.5 <br />
            Tank Volume: 70l <br />
            Rear: Right <br />
            Year: 2013 <br />
            Top Speed: 220km/h <br />
            Number of doors: 5 <br /> <br />
            Renting a Volkswagen Passat provides a premium and reliable
            transportation solution for various travel needs. Whether you're
            traveling for business or pleasure, the Passat offers comfort,
            sophistication, and versatility for any journey. Book now to
            experience the luxury and performance of driving a Passat.
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

export default passat;
