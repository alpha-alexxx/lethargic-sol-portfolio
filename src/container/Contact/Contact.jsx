import { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [btnMessage, setBtnMessage] = useState("Send");

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if ((name, email, message === "")) {
      setBtnMessage("Failed - Blank Input");
      return;
    } else {
      setBtnMessage("sending");

      const contact = {
        _type: "contact",
        name: name,
        email: email,
        message: message,
      };
      client.create(contact).then(() => {
        setBtnMessage("Send");
        setIsFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 5000);
      });
    }
  };
  return (
    <>
      <h2 className="head-text">Take a Coffee and Chat with Me</h2>
      <h3 className="p-text">Eagerly Waiting for collabrations.</h3>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ankitkr2001@hotmail.com" className="p-text">
            ankitkr2001@hotmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:0000" className="p-text">
            Not Available
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              className="p-text"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your E-mail"
              name="email"
              value={email}
              className="p-text"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              name="message"
              className="p-text"
              placeholder="Your Message goes here!"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <input
            type="submit"
            className="p-text submit-btn"
           
            onClick={handleSubmit}
            value={btnMessage}
          />
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank You For Getting In Touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
