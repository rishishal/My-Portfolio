import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handelChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2 className='head-text'>Take a Coffe & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:rishi.kumar01609@gmail.com' className='p-text'>
            rishi.kumar01609@gmail.com
          </a>
        </div>
        <div className='app__footer-card '>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +91(7011629460)' className='p-text'>
            +91 (7011629460)
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handelChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handelChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handelChangeInput}
            ></textarea>
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in Touch!</h3>
        </div>
      )}
      <div className='copyright'>
        <p className='p-text'>@2023 Rishi</p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
