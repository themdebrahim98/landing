import React, { useState } from 'react';
import './About.css';
import Footer from './Footer';
import Carousel from './Carousel.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { IconButton } from '@material-ui/core';
import Lottie from 'react-lottie';
import student from './json/student.json';
import Features from './component/Features.js';

const aniStudent = {
    loop: true,
    autoplay: true,
    animationData: student,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
function About() {
    const [item] = useState(Features);
    return (
        <div className="about">
            <div className="container-fluid mt-5 about-style">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <h1 class="text-center main-heading">About</h1>
                        <p class="text-center sub-heading">Grow idea with us</p>
                        <div className="row">
                            <div className="col-md-6 col-12">{/*left side*/}
                                <Lottie options={aniStudent} />
                            </div>
                            <div className="about-side col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                                {/*right side*/}
                                <div class="section-title">
                                    <h1 class="title">introduction</h1>
                                    <h2 class="subtitle"> Who Are We? <hr /></h2>
                                </div>
                                <div class="intro-content">
                                    <p>We are Computer Science Engineering and Information Technology Students in MAKAUT,W.B. We opened a community together. So, we basically work on the website development. We aslo work as a freelancer.</p>
                                    <ul class="list-unstyled">
                                        <li><IconButton><i class="fas fa-check"></i></IconButton> Lorem ipsum dolor sit amet. </li>
                                        <li><IconButton><i class="fas fa-check"></i></IconButton>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li><IconButton><i class="fas fa-check"></i></IconButton> Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                        <li><IconButton><i class="fas fa-check"></i></IconButton>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <Carousel />
                    </div>
                </div>
            </div>
            {/* Another Division */}
            <div class="container features-section">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-12">
                        <div class="section-title">
                            <h1 class="title">Features</h1>
                            <h2 class="subtitle">Commonly we work on</h2>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    {/*features item start*/}
                    {
                        item.map((elem) => {
                            const { icon, name, text } = elem;
                            return (
                                <div class="col-md-6 col-lg-4 col-12 d-flex">
                                    <div class="col-lg-12 features-item">
                                        <div class="icon"><i class={icon}></i></div>
                                        <h3>{name}</h3>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/*features item ends*/}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
