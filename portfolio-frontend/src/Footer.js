import React, { useEffect, useState } from "react";
import instagram from "./img/instagram.jpg";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import twitter from "./img/twitter.png";
import './Footer.css'
import axios from "axios";

function Footer() {
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
    // <div
    //   classNameNameName="footer d__flex align__items__center justify__content__space__between pz-10"
    //   style={{ padding: "10px 20px", zIndex: "100" }}
    // >
    //   <img src={footerImg} alt="" classNameNameName="footer__img pointer" style={{width:'4rem', borderRadius:'60%'}} />

    //   <span
    //     classNameNameName="copyright"
    //     style={{ color: "#c6c9d8", fontSize: "20px", opacity: "0.75" }}
    //   >
    //     Copyright © 2022 programmer Ali Husaain Mansuri. All Rights Reserved.
    //   </span>
    // </div>

    <>
      <div className="footer">
         <div className="left">
          <a href={aboutData.instagramUrl} target="_blank" rel="noreferrer">
            <img src={instagram} alt=""></img>
          </a>
          <a href={aboutData.linkedInUrl} target="_blank" rel="noreferrer">
            <img src={linkedin} alt=""></img>
          </a>
          <a href={aboutData.githubUrl} target="_blank" rel="noreferrer">
            <img src={github} alt=""></img>
          </a> 
          <a href={aboutData.twitterUrl} target="_blank" rel="noreferrer">
            <img src={twitter} alt=""></img>
          </a>
         </div>
         <div className="right">
             <p>Copyright © 2024 {aboutData.name}. All Rights Reserved.</p>
         </div>
      </div>

    </>
  );
}

export default Footer;
