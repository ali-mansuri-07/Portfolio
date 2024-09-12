import React from "react";
import "./Project.css";
import Project1 from './img/news.jpg';
import Project2 from './img/portfolio.jpg';
import Project3 from './img/ecom.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/gym.jpg';
import Project6 from './img/booking.jpg';

function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="project_heading">My Projects</h1>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">News App</h5>
                     <h4 className="project__text">Fact-News : web-app built using newsapi and React, bootstrap.</h4>
                     <a href="https://fact-news.pages.dev" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Portfolio App</h5>
                     <h4 className="project__text">Built a personal portfolio website using HTML, CSS, JS, React and bootstrap</h4>
                     <a href="https://aliportfolio.pages.dev/" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Ecommerce</h5>
                     <h4 className="project__text">Built a full stack Ecommerce website using MERN, Redux, Firebase, JWT, etc.</h4>
                     <a href="https://ecommercebyali.com" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Text-utiliser</h5>
                     <h4 className="project__text">Text-utiliser is a web-app built using React, Javascript which has many function</h4>
                     <a href="https://textutiliserbyali.pages.dev/" target="_blank" rel="noreferrer" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Gym App</h5>
                     <h4 className="project__text">Built a front-end of the gym app using HTML, CSS, Javascript, and React.</h4>
                     <a href="https://fitindiaclubgymbyali.pages.dev/" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">CrowdSourcing Application</h5>
                     <h4 className="project__text">Decentralized CrowdSourcing Application</h4>
                     <a href="https://crowdsourcing.netlify.app/" className="project__btn" target="_blank" rel="noreferrer">View Details</a>
                     </div>
                 </div>
             </div>
           </div>
       </div>
    </div>
  );
}

export default Project;