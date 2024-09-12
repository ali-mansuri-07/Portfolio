import "./Contact1.css";
import React, { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

function Contact1() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to backend
    axios
      .post("http://localhost:5000/api/contact", formData)
      .then((response) => {
        console.log("Form data saved:", response.data);
        alert("Your message has been sent!");

        // Send email using EmailJS
        emailjs
          .sendForm(
            "service_tqv3p28",
            "template_l0sfwtj",
            form.current,
            "OlhTs89QW8olTnYIT"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("Email sent to admin.");
            },
            (error) => {
              console.log(error.text);
            }
          );

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the form", error);
      });

      console.log("FormData = "+ formData);
  };

  return (
    <div className="contact" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+91 6261510212</strong> or email :{" "}
                <strong>mansurialihussain07@gmail.com</strong>
              </p>
            </div>

            <div className="input__box">
              <form ref={form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name *"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="contact phone"
                  placeholder="Your Phone No *"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="contact email"
                  placeholder="Your Email *"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  type="text"
                  id="message"
                  placeholder="Write Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
