import React from 'react';
import Footer from './Footer';
import './Project.css'
import Gallery from './component/Gallery.js';
import Lottie from 'react-lottie';
import project from './json/project-management.json';
import { IconButton } from '@material-ui/core';

const aniProject = {
    loop: true,
    autoplay: true,
    animationData: project,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function Project() {
    return (
        <div>
            <div className="container-fluid mt-5 about-style">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <h1 class="text-center main-heading">Explore</h1>
                        <p class="text-center sub-heading">Show match with us</p>
                        <div className="row">
                            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                                <div class="section-title">
                                    <h1 class="title">Project</h1>
                                    <h2 class="subtitle">Our Work Flow <hr /></h2>
                                </div>
                                <div className="intro-content">
                                    <h4>The two important things that we learn that "We are as powerful and strong as we allow yourself to be", and "The most challenging part of any endeavor is taking the first step, i.e.  making the first decision."</h4>
                                    <br />
                                    <p>In our development community, we focused on brushing up skills, team management, etc.</p>
                                    <br />
                                    <p>Mainly we provide knowledge on various technologies and try to build influential communication network among all programmer by online meetings.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <Lottie options={aniProject} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Gallery />
            <Footer />
        </div>
    )
}

export default Project
