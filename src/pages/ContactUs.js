import CaptchaValidation from "../components/CaptchaValidation";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const generateCaptcha = () => {
  const characters =
    "ABCDE123FGHIJKLM4N56OPQRSTUVW789XY145Zabcdefg7582hijklmnop4785qrstuvwxyz123456789";
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
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      name: "",
      email: "",
      phone: "",
      subject: "",
      questionType: "",
      comment: "",
    },
  ]);
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the input matches the CAPTCHA code
    if (input.toUpperCase() === captcha.toUpperCase()) {
      setValidationResult("success");

      // Send email using EmailJS
      const recipientEmail = "ahmedattia2753061@gmail.com";
      const senderEmail = "ahmedfawzy69513@gmail.com";
      try {
        emailjs.send(
          "service_ugr5tth",
          "template_p4y4b2m",
          {
            to_name: "journal",
            from_name: data.name,
            phone: data.phone,
            subject: data.subject,
            questionType: data.questionType,
            message: data.comment,
            to_email: recipientEmail,
            from_email: data.email,
          },
          "iy1BkJev9_Y8yfhuj"
        );
        console.log("Email sent successfully!");
        Swal.fire({
          title: "Thank you!",
          text: "Your message has been sent!",
          icon: "success",
          showConfirmButton: false,
          timer: 1200
        });
        navigate("/");
      } catch (error) {
        console.error("Failed to send email:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong please try again!",
        });
      }
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
        <h4>Publisher: Faculty of Science , Menoufia University , Egypt</h4>
        <h4>Email: journal@science.menofia.edu.eg</h4>
      </div>
      {/* form */}
      <div className="contact-us-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group my-1 col-md-4">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="form-group my-1 col-md-4">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="form-group my-1 col-md-4">
              <label htmlFor="phone">Phone *</label>
              <input type="text" className="form-control" id="phone" required onChange={(e) => setData({ ...data, phone: e.target.value })} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6 my-1">
              <label htmlFor="subject my-1">Subject</label>
              <input type="text" className="form-control" id="subject" onChange={(e) => setData({ ...data, subject: e.target.value })} />
            </div>
            <div className="form-group col-md-6 my-1">
              <label htmlFor="question-type my-1">Question Type</label>
              <select className="form-control" id="question-type" onChange={(e) => setData({ ...data, questionType: e.target.value })}>
                <option>--Select--</option>
                <option value={"subscribe"}>Subscribe Jornal</option>
                <option value={"login"}>Login Error</option>
                <option value={"registration"}>Registration Error</option>
                <option value={"manuscript"}>Problem with sending manuscript</option>
                <option value={"contact"}>contact with Editorial office</option>
                <option value={"suggestion"}>Sending suggestion</option>
                <option value={"complication"}>sending complication</option>
                <option value={"other"}>other</option>
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
              onChange={(e) => setData({ ...data, comment: e.target.value })}
            ></textarea>
          </div>
          {/* start captcha */}
          <div>
            <div className="captcha row my-1 d-flex justify-content-center align-items-center">
              <label htmlFor="captcha" className="my-1">
                Captcha validation
              </label>
              <div className="form-group col-lg-3 col-md-4 col-sm-4 col-xs-4">
                <img
                  className="form-control"
                  src={`https://dummyimage.com/150x50/fff/193687/&text=${captcha}`}
                  alt="CAPTCHA"
                />
              </div>
              <div className="form-group col-lg-9 col-md-8 col-sm-8 col-xs-8">
                <input
                  className="form-control"
                  type="text"
                  value={input}
                  onChange={handleChange}
                  placeholder="Secret code"
                />
              </div>
            </div>
            <div>
              {validationResult === "failed" ? (
                <p className="text-danger">captcha validation failed</p>
              ) : null}
            </div>
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
