import React from 'react';
import './About.css';
import Footer from './Footer';
import Carousel from './Carousel.js';
import about from './images/about.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { IconButton } from '@material-ui/core';

function About() {
    return (
        <div className="about">
            <div className="container-fluid mt-5 about-style">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <h1 class="text-center main-heading">About</h1>
                        <p class="text-center sub-heading">Grow idea with us</p>
                        <div className="row">
                            <div className="col-md-6 col-12">{/*left side*/}
                            <img src={about} alt="" />
                            </div>
                            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                                {/*right side*/}
                                <div class="section-title">
                                    <h1 class="title">introduction</h1>
                                    <h2 class="subtitle"> Who Are We? <hr /></h2>
                                </div>
                                <div class="intro-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, facere atque. Maxime nobis eligendi totam, corrupti error aut quos ratione, possimus rerum eum asperiores repellat non quo, sunt eius mollitia!</p>
                                    <ul class="list-unstyled">
                                        <li><IconButton><i class="fas fa-check"></i></IconButton> Our all products are high quality</li>
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
            <Carousel />
            {/* Another Division */}
            <div class="container features-section">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-12">
                        <div class="section-title">
                            <h1 class="title">Features</h1>
                            <h2 class="subtitle">Lorem ipsum dolor sit amet.</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/*features item 1 start*/}
                    <div class="col-md-6 col-lg-4 col-12 d-flex">
                        <div class="col-lg-12 features-item">
                            <div class="icon"><i class="fas fa-database"></i></div>
                            <h3>Notification</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia minima placeat.</p>
                        </div>
                    </div>
                    {/*features item 1 ends*/}
                    {/*features item 2 start*/}
                    <div class="col-md-6 col-lg-4 col-12 d-flex">
                        <div class="col-lg-12 features-item">
                            <div class="icon"><i class="fas fa-wifi"></i></div>
                            <h3>Notification</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia minima placeat.</p>
                        </div>
                    </div>
                    {/*features item 2 ends*/}
                    {/*features item 3 start*/}
                    <div class="col-md-6 col-lg-4 col-12 d-flex">
                        <div class="col-lg-12 features-item">
                            <div class="icon"><i class="fas fa-laptop-code"></i></div>
                            <h3>Notification</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia minima placeat.</p>
                        </div>
                    </div>
                    {/*features item 3 ends*/}
                    {/*features item 4 start*/}
                    <div class="col-md-6 col-lg-4 col-12 d-flex">
                        <div class="col-lg-12 features-item">
                            <div class="icon"><i class="fas fa-terminal"></i></div>
                            <h3>Notification</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia minima placeat.</p>
                        </div>
                    </div>
                    {/*features item 4 ends*/}
                    {/*features item 5 start*/}
                    <div class="col-md-6 col-lg-4 col-12 d-flex">
                        <div class="col-lg-12 features-item">
                            <div class="icon"><i class="fas fa-book-open"></i></div>
                            <h3>Notification</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia minima placeat.</p>
                        </div>
                    </div>
                    {/*features item 5 ends*/}
                    {/*features item 6 start*/}
                    <div class="col-md-6 col-lg-4 col-12 d-flex">
                        <div class="col-lg-12 features-item">
                            <div class="icon"><i class="fas fa-shield-alt"></i></div>
                            <h3>Notification</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia minima placeat.</p>
                        </div>
                    </div>
                    {/*features item 6 ends*/}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
