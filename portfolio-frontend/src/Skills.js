import React from 'react'
import './Skills.css'
import img1 from './img/img-1.png'
import img2 from './img/img-2.png'
import img3 from './img/img-3.png'
import img8 from './img/img-8.png'
import img4 from './img/img-4.png'
import img5 from './img/img-5.png'
import img6 from './img/img-6.png'
import img7 from './img/img-7.png'
import img9 from './img/img-9.png'
import img10 from './img/img-10.png'
import img11 from './img/img-11.jpg'
import img12 from './img/img-12.png'

// import {images} from './img'

function Skills() {
    return (
        <div className='Skills'>
            <section className="skills" id="Skills">
                <h2 className="skill-header">My Skills</h2>

                <div className="skills-wrapper">
                    <div className="first-set animate__animated animate__pulse">
                        <img
                            src={img3}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />

                        <img
                            src={img4}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />

                        <img
                            src={img2}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />
                         <img
                            src={img8}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />


                    </div>

                    <div className="second-set animate__animated animate__pulse">
                        <img
                            src={img7}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />

                        <img
                            src={img6}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />
                         <img
                            src={img1}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />
                        <img
                            src={img5}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />
                    </div>
                    <div className="third-set animate__animated animate__pulse">
                        <img
                            src={img9}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />

                        <img
                            src={img10}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />
                         <img
                            src={img11}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />
                        <img
                            src={img12}
                            alt=""
                            loading="lazy"
                            className="icon icon-card"
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills