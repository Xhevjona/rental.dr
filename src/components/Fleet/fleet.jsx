import React from "react";
import "../Fleet/fleet.scss";
import Car1 from "../Image/a3.png";
import Car2 from "../Image/golf6.png";
import Car3 from "../Image/jetta.png";
import Car4 from "../Image/passat.png";
import Car5 from "../Image/benz.png";
import Car6 from "../Image/a4.png";
import Car7 from "../Image/opel.png";
import Car8 from "../Image/touran.png";
import { Link } from "react-router-dom";


const Fleet = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="fleet-background">
        <h1>DISCOVER OUR FLEET</h1>
        <p>
          Explore our wide range of rental cars designed to meet your travel
          needs.
        </p>
      </div>
      <div className="cars-container">
        <div className="cars">
          <img src={Car1} width={350} height={250} alt="fleet cars" />
          <div className="car-desc">
            <h1>AUDI A3 2005</h1>
            <h2>1.9 DIESEL | MANUAL | 4+1</h2>
            <p>
              Experience a smooth and efficient ride with the Audi A3 2005 — a
              reliable hatchback featuring a 2.2L diesel engine and manual
              transmission. Ideal for both city commutes and long-distance
              drives, offering comfort, fuel efficiency, and classic Audi
              performance.
            </p>
            <Link to="/contact">
            <button onClick={scrollToTop} className="fleet-btn">Get a Quote</button>
          </Link>
          </div>
        </div>
        <div className="cars">
          <img src={Car2} width={350} height={230} alt="fleet cars" />
          <div className="car-desc">
            <h1>VOLKSWAGEN GOLF VI 2009</h1>
            <h2>2.0 DIESEL | MANUAL | 4+1</h2>
            <p>
              The Volkswagen Golf VI 2009 combines efficiency and comfort,
              featuring a 2.0L diesel engine with a manual transmission. Perfect
              for both city drives and long journeys, offering spacious
              interiors, fuel economy, and reliable performance.
            </p>
            <Link to="/contact">    
          <button onClick={scrollToTop} className="fleet-btn">Get a Quote</button>
          </Link>
          </div>
        </div>
      </div>
      <div className="cars">
        <img src={Car3} width={350} height={230} alt="fleet cars" />
        <div className="car-desc">
          <h1>VOLKSWAGEN JETTA 2010</h1>
          <h2>2.5 PETROL | AUTOMATIC | 4+1</h2>
          <p>
            Experience comfort and performance with the Volkswagen Jetta 2010.
            Equipped with a 2.5L petrol engine and automatic transmission, this
            sedan offers a smooth ride, spacious interior, and modern features —
            perfect for both city commutes and longer trips.
          </p>
          <Link to="/contact">
          <button onClick={scrollToTop} className="fleet-btn">Get a Quote</button>
        </Link>
        </div>
      </div>
      <div className="cars">
        <img src={Car4} width={350} height={270} alt="fleet cars" />
        <div className="car-desc">
          <h1>VOLKSWAGEN PASSAT 2015</h1>
          <h2>1.8 PETROL | AUTOMATIC | 4+1</h2>
          <p>
            The Volkswagen Passat 2014 blends comfort, performance, and style.
            Powered by a 2.5L petrol-gas engine with automatic transmission, it
            offers a spacious interior, smooth driving experience, and fuel
            efficiency — ideal for both city commutes and long-distance
            journeys.
          </p>
          <Link to="/contact">
          <button onClick={scrollToTop} className="fleet-btn">Get a Quote</button>
        </Link>
        </div>
      </div>
      <div className="cars">
        <img src={Car5} width={350} height={270} alt="fleet cars" />
        <div className="car-desc">
          <h1>MERCEDES BENZ C 2001</h1>
          <h2>2.2 DIESEL | MANUAL | 4+1</h2>
          <p>
            For a short-term rental, the 2001 Mercedes-Benz C-Class 2.2 Diesel
            Manual offers a premium driving experience. This well-maintained
            sedan combines efficiency with comfort, featuring a smooth 2.2-liter
            diesel engine that delivers great fuel economy and performance. The
            manual transmission enhances driver control, making it ideal for
            those who enjoy a more engaged driving experience.
          </p>
          <Link to="/contact">
          <button onClick={scrollToTop} className="fleet-btn">Get a Quote</button>
       </Link>
        </div>
      </div>
      <div className="cars">
        <img src={Car6} width={350} height={270} alt="fleet cars" />
        <div className="car-desc">
          <h1>AUDI A4 2009</h1>
          <h2>2.0 DIESEL | MANUAL | 4+1</h2>
          <p>
            For a short-term rental, the 2009 Audi A4 2.0 Diesel Manual offers a
            refined and dynamic driving experience. Powered by a 2.0-liter
            diesel engine, it combines impressive fuel efficiency with solid
            performance. The manual transmission provides a more connected and
            engaging driving experience, ideal for those who enjoy precision
            control.
          </p>
          <Link to="/contact">
          <button onClick={scrollToTop} className="fleet-btn">Get a Quote</button>
        </Link>
        </div>
      </div>
      <div className="cars">
        <img src={Car7} width={350} height={200} alt="fleet cars" />
        <div className="car-desc">
          <h1>OPEL VECTRA 2010</h1>
          <h2>1.9 DIESEL | AUTOMATIC | 4+1</h2>
          <p>
            The 2010 Opel Vectra 1.9 Diesel Automatic offers a comfortable and
            efficient driving experience. Equipped with a 1.9-liter diesel
            engine, it strikes a great balance between power and fuel economy.
            The automatic transmission ensures a smooth, effortless drive, ideal
            for both city commuting and longer journeys.
          </p>
          <Link to="/contact">
          <button onClick={scrollToTop} className="fleet-btn">Get a Quote</button>
        </Link>
        </div>
      </div>
      <div className="cars">
        <img src={Car8} width={350} height={260} alt="fleet cars" />
        <div className="car-desc">
          <h1>VOLKSWAGEN TOURAN 2007</h1>
          <h2>2.0 DIESEL | MANUAL | 6+1</h2>
          <p>
            Discover comfort and versatility with the Volkswagen Touran 2007 — a
            7-seater family car powered by a 1.9L diesel engine with automatic
            transmission. Ideal for group trips and family vacations, it offers
            spacious interiors, efficient fuel consumption, and a comfortable
            driving experience for both city and long-distance journeys.
          </p>
          <Link to="/contact">
          <button onClick={scrollToTop} className="fleet-btn">Get a Quote</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
