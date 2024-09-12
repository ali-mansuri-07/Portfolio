import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home() {

  const [aboutData, setAboutData] = useState({
    name: "",
    aboutText: "",
    profileImg: "",
    resumeLink: "",
  });

  useEffect(() => {
    // Fetch about data from the backend
    axios
      .get("http://localhost:5000/api/about")
      .then((response) => setAboutData(response.data))
      .catch((error) => console.error("Error fetching about data:", error));
    }, []);


  // fixed Header
  window.onload = function () {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      header.classList.toggle("active", window.scrollY > 0);
    });

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <header className="nav-header">
            <nav className="navbar">
              <a href="/" className="nav-logo">Ali.</a>
              <ul className="nav-menu">
                <li className="nav-item">
                  <a href="#Home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#About" className="nav-link">About Me</a>
                </li>
                <li className="nav-item">
                  <a href="#Experiences" className="nav-link">Experiences</a>
                </li>
                <li className="nav-item">
                  <a href="#Skills" className="nav-link">Skills</a>
                </li>
                <li className="nav-item">
                  <a href="#Projects" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="#Contact" className="nav-link">Contact Me</a>
                </li>
                <li className="nav-item">
                  <a href="/admin-dashboard" className="nav-link">Admin</a>
                </li>
              </ul>
              <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </nav>
          </header>


        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY PORTFOLIO</h1>
              <h2 className="home__text pz__10">Hi, I’m {aboutData.name} </h2>
              <h3 className="home__text sweet pz__10">{aboutData.home_heading}</h3>     
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;