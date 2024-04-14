import React from "react";
import "../About/about.scss";

const about = () => {
  return (
    <div> 
      <div className="background">
      <h2>Welcome to Rental.Dr</h2>
      </div>
      <div className="about1">
      <p>
        At Rental.Dr, we believe in making your travel experience as seamless
        and enjoyable as possible. Whether you're embarking on a business trip,
        a family vacation, or just need a reliable vehicle for your daily
        commute, we've got you covered.
      </p>
      </div>
      <div className="about2">
      <h2> Our Mission </h2>
      <p>
        Our mission is simple: to provide you with top-quality vehicles and
        exceptional service at competitive prices. We understand that your time
        is valuable, so we strive to make the rental process quick and
        hassle-free, allowing you to focus on what matters most – your journey.
      </p>
      </div>
      <div className="about3">
      <h2>Get in Touch</h2>
      <p>
        Ready to book your rental car? Explore our fleet and make your
        reservation online today! If you have any questions or special requests,
        feel free to contact our friendly team – we're here to help. Thank you
        for choosing Rental.Dr for your transportation needs. We
        look forward to serving you soon!
      </p>
      </div>
    </div>
  );
};

export default about;
