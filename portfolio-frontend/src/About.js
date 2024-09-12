import React from "react";
import "./About.css";
import aboutImg from "./img/profile-new.jpg";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                My name is Ali Hussain Mansuri, Fullstack Developer with a passion for building functional and robust web applications from India.
                I'm pursuing my Bachelor of Engineering in Information Technology from IET DAVV Indore.
              </p>
              <p className="about__text p__color">
                I’m very into web technologies and love intersection of programming, design and business.
                I'm also a having knowledge of the DSA and experience of solving problems on various platforms such as Leetcode, Code Studio, Hackerrank.
              </p>
              <p className="about__text p__color">
                I have experience in both front-end and back-end development, developed several full-stack based web application using Node.js, Express js, React.js and MongoDB, Bootstrap, Tailwind.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1yCWhMyZEIWNMfihMn_yG_bNxOkI6iByX/view?usp=drive_link" download="Ali's Resume.pdf" target="_blank" rel="noreferrer">
                  <button className="about btn pointer">Download Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="up__to__top__btn">
        <a href="/" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
