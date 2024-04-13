import React, { useState, useRef } from "react";
import "../Contact/contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
      <div className="contact-title">
        <h2>Contact Us</h2>
      </div>
      <div className="container">
        <div className="left">
          <div className="block1">
            {" "}
            <h4>Address</h4>
            <p>Durres, Albania</p>
          </div>
          <div className="block2">
            <h4>Phone</h4>
            <p>+355 67 606 0700 </p>
          </div>
          <div className="block3">
            {" "}
            <h4>Email</h4>
            <p>vincensi_18dr@hotmail.com</p>
          </div>
        </div>
        <div className="right">
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
      </div>
    </div>
  );
};

export default Contact;
