import React, { useEffect, useState } from "react";
import axios from "axios";
import "./About1.css";

function About() {
  const [aboutData, setAboutData] = useState({
    name: "",
    aboutText: "",
    profileImg: "",
    resumeLink: "",
    githubUrl: "",
    instagramUrl: "",
    linkedInUrl: "",
    twitterUrl: ""
  });

  useEffect(() => {
    // Fetch about data from the backend
    axios
      .get("http://localhost:5000/api/about")
      .then((response) => setAboutData(response.data))
      .catch((error) => console.error("Error fetching about data:", error));
    }, []);
    
  return (
    <div className="about" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutData.profilePhotoUrl} alt="Profile" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">{aboutData.name}</h1>
            <div className="about__meta">
              <p className="about__text p__color">{aboutData.aboutText}</p>
              <div className="about__button d__flex align__items__center">
              <a href={aboutData.resumeUrl} download="Ali's Resume.pdf" target="_blank" rel="noreferrer">
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
