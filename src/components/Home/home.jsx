import React from "react";
import "../Home/home.scss";
import Audi from "../Image/a3.png";
import Golf from "../Image/golf6.png";
import Jetta from "../Image/jetta.png";
import US from "../Image/us.jpg";
import { Link } from "react-router-dom";

const home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div className="home-background">
        <h1>RENTAL.DR</h1>
        <h2>Affordable Rides, Unlimited Adventures!</h2>
        <div className="home-btn">
        <Link to="/contact">
          <button onClick={scrollToTop}>Book Now</button>
          </Link>
        </div>
      </div>
      <div className="our-fleet">
        <h1>Our Fleet</h1>
      </div>
      <div className="fleet">
        <h3>
          Explore our diverse fleet, perfect for any journey. From
          fuel-efficient economy cars, we have the right ride for every need.
        </h3>
      </div>
      <div className="fleet-container">
        <div className="slide">
          <div className="car1">
            <img src={Audi} alt="lincoln" width={250} height={160} />
            <h2>Audi A3</h2>
            <p>Passengers: 1-4</p>
          </div>

          <div className="car2">
            <img src={Golf} alt="chevy" width={250} height={150} />
            <h2>Volkswagen Golf VI</h2>
            <p>Passengers:1-4 </p>
          </div>

          <div className="car3">
            <img src={Jetta} alt="limo" width={250} height={150} />
            <h2>Volkswagen Jetta</h2>
            <p>Passengers: 1-4 </p>
          </div>
        </div>
        <div className="view-all">
          <Link to="/fleet">
          <button onClick={scrollToTop}>View All</button>
          </Link>
        </div>
      </div>

      <div className="why-us">
        <h1>Why Us</h1>
      </div>
      <div className="us-container">
        <img src={US} alt="why us section" width={430} height={460} />
        <div className="wus">
          <h3>
            At Rental.Dr, we go beyond just renting cars—we provide a seamless
            and stress-free travel experience.
            <br /> Here’s why customers trust us: <br />
            Wide Vehicle Selection – From fuel-efficient economy cars to luxury
            SUVs, we have the perfect ride for every journey. <br />
            Affordable & Transparent Pricing – No hidden fees, just great rates
            with flexible rental options. <br />
            Convenient Booking & Pickup – Easy online reservations and
            hassle-free pickup locations.
            <br />
            24/7 Customer Support – We're here for you, anytime you need
            assistance.
            <br />
            Well-Maintained & Safe Vehicles – Regularly serviced cars to ensure
            your safety and comfort.
          </h3>
          <Link to="/contact">
          <button onClick={scrollToTop} className="intouch">Get in Touch</button>
          </Link>
        </div>
      </div>
      <div className="end-container">
          <h2>
            At Rental.Dr, we are committed to providing reliable,
            affordable, and hassle-free car rentals for every journey. Whether
            you're traveling for business, leisure, or a weekend getaway, our
            diverse fleet of well-maintained vehicles ensures you find the
            perfect ride.
          </h2>
          <div className="buttons">
          <Link to="/fleet">
            <button onClick={scrollToTop} className="frst-btn">Our Fleet</button></Link>
            <Link to="/contact">
            <button onClick={scrollToTop} className="scnd-btn">Contact Us</button></Link>
          </div>
        </div>
      </div>
  
  );
};

export default home;
