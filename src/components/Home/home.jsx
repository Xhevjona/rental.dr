import React, { useState, useRef } from "react";
import "../Home/home.scss";
import Audi from "../Image/a3.png";
import Golf from "../Image/golf6.png";
import Jetta from "../Image/jetta.png";
import Passat from "../Image/passat.png";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_cle6h3x",
          "template_y7mt1pd",
          e.target,
          "JRwxi7mWdOU58RcWY"
        )
        .then(
          (result) => {
            setIsSentSuccessfully(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};
    if (!formData.name.trim()) {
      isValid = false;
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      isValid = false;
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      isValid = false;
      errors.message = "Message is required";
    }
    setErrors(errors);
    return isValid;
  };

  return (
    <div>
      <div className="first-group">
        <div className="description">
          <h2>Audi A3 2007</h2>
          <p>1.9 Manual</p>
          <h3>35€/Day</h3>
        </div>
        <div className="image1">
          <img src={Audi} width={190} height={135} />
        </div>
      </div>
      <div className="divide">
        <hr />
      </div>

      <div className="second-group">
        <div className="description">
          <h2>Volkswagen Golf VI 2009</h2>
          <p>1.6 Manual</p>
          <h3>40€/Day</h3>
        </div>
        <div className="image2">
          <img src={Golf} width={190} height={120} />
        </div>
      </div>
      <div className="divide">
        <hr />
      </div>

      <div className="third-group">
        <div className="description">
          <h2>Volkswagen Golf VI 2009</h2>
          <p>2.0 Manual</p>
          <h3>40€/Day</h3>
        </div>
        <div className="image3">
          <img src={Golf} width={190} height={120} />
        </div>
      </div>
      <div className="divide">
        <hr />
      </div>
      <div className="fourth-group">
        <div className="description">
          <h2>Volkswagen Jetta 2010</h2>
          <p>2.5 Automatic</p>
          <h3>40€/Day</h3>
        </div>
        <div className="image4">
          <img src={Jetta} width={220} height={140} />
        </div>
      </div>
      <div className="divide">
        <hr />
      </div>
      <div className="fifth-group">
        <div className="description">
          <h2>
            Volkswagen <br /> Passat Premium <br /> 2013
          </h2>
          <p>2.5 Automatic</p>
          <h3>60€/Day</h3>
        </div>
        <div className="image5">
          <img src={Passat} width={230} height={190} />
        </div>
      </div>
      <div className="form-text">
        <h5>
          FOR MORE INFORMATION ABOUT OUR SERVICES,PLEASE DO NOT HESITATE TO SEND
          US A MESSAGE.
        </h5>
      </div> 
      <div className="form-container">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="name">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="firstName"
              tabIndex="1"
              placeholder="Name"
            />
          </div>
          <div className="feedback">
            {" "}
            {errors.name && <p>{errors.name}</p>}{" "}
          </div>
          <div className="form-email">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              className="form-email"
              placeholder="Email"
              tabIndex="2"
            />
          </div>
          <div className="feedback">
            {" "}
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="subject">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="firstName"
              tabIndex="3"
              placeholder="Subject"
            />
          </div>
          <div className="feedback">
            {" "}
            {errors.subject && <p>{errors.subject}</p>}
          </div>
          <div className="message">
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="message"
              name="message"
            />
          </div>
          <div className="feedback">
            {" "}
            {errors.message && <p>{errors.message}</p>}
          </div>
          <button type="submit" className="send">
            Send Message
          </button>
        </form>
      </div>

      {isSentSuccessfully && (
        <div className="success-message">
          <p> Form submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
