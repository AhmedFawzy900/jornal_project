import CaptchaValidation from "../components/CaptchaValidation";
import React, { useState } from "react";

const generateCaptcha = () => {
  const characters = "ABCDE123FGHIJKLM4N56OPQRSTUVW789XY145Zabcdefg7582hijklmnop4785qrstuvwxyz123456789";
  let captcha = "";
  for (let i = 0; i < 8; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

export default function ContactUs() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [input, setInput] = useState("");
  const [validationResult, setValidationResult] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the input matches the CAPTCHA code
    if (input.toUpperCase() === captcha.toUpperCase()) {
      setValidationResult("success");
    } else {
      setValidationResult("failed");
      // Generate a new CAPTCHA code
      setCaptcha(generateCaptcha());
    }
    // Clear the input field
    setInput("");
  };

  return (
    <div className="contact-us container">
      <div className="contact-us-title">
        <h3 className="about-title">Contact Us</h3>
      </div>
      <div className="contact-us-info">
        <h4>
          Publisher: Faculty of Science , Menoufia University , Egypt
        </h4>
        <h4>Email: journal@science.menofia.edu.eg</h4>
      </div>
      {/* form */}
      <div className="contact-us-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group my-1 col-md-4">
              <label htmlFor="name">Name *</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group my-1 col-md-4">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="form-group my-1 col-md-4">
              <label htmlFor="phone">Phone *</label>
              <input type="text" className="form-control" id="phone" required />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6 my-1">
              <label htmlFor="subject my-1">Subject</label>
              <input type="text" className="form-control" id="subject" />
            </div>
            <div className="form-group col-md-6 my-1">
              <label htmlFor="question-type my-1">Question Type</label>
              <select className="form-control" id="question-type">
                <option>--Select--</option>
                <option>Subscribe Jornal</option>
                <option>Login Error</option>
                <option>Registration Error</option>
                <option>Problem with sending manuscript</option>
                <option>contact with Editorial office</option>
                <option>Sending suggestion</option>
                <option>sending complication</option>
                <option>other</option>
              </select>
            </div>
          </div>
          <div className="form-group my-1">
            <label htmlFor="message">Comments *</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          {/* start captcha */}
          <div>
            <div className="captcha row my-1 d-flex justify-content-center align-items-center">
                <label htmlFor="captcha" className="my-1">Captcha validation</label>
                <div className="form-group col-lg-3 col-md-4 col-sm-4 col-xs-4">
                    <img
                    className="form-control"
                        src={`https://dummyimage.com/150x50/fff/193687/&text=${captcha}`}
                        alt="CAPTCHA"
                    />
                </div>
                <div className="form-group col-lg-9 col-md-8 col-sm-8 col-xs-8">
                    <input className="form-control" type="text" value={input} onChange={handleChange} placeholder="Secret code" />
                </div>
            </div>
            <div>{validationResult === "failed" ? (
                <p className="text-danger">captcha validation failed</p>
            ):( null )}</div>
          </div>
          {/*end  captcha */}
          {/* align button to right */}
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="d-flex align-items-center justify-content-center btn btn-primary my-3"
            >
              <i class="fa-solid fa-check mx-1"></i>Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
