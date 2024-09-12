import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          alert("Message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
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
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    className="contact name"
                    placeholder="Your name *"
                    id="name"
                    name="user_name"
                  />
                  <input
                    type="text"
                    className="contact phone"
                    placeholder="Your Phone No *"
                    id="phone"
                    name="user_phone"
                  />
                  <input
                    type="email"
                    className="contact email"
                    placeholder="Your Email *"
                    id="email"
                    name="user_email"
                  />
                  <input
                    type="text"
                    className="contact subject"
                    placeholder="Write a Subject"
                    id="subject"
                    name="subject"
                  />
                  <textarea
                    type="text"
                    id="message"
                    placeholder="Write Your message"
                    name="message"
                  ></textarea>
                  <button
                    className="btn contact pointer"
                    type="submit"
                    value="Send"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
