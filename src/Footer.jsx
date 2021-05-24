import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';

import './Footer.css';
function Footer() {
    return (
        <div className="text-white pt-5 pb-4 footer">
            <div className="container-fluid text-center text-md-left">

                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <div className=" logo" style={{ color: "#ddd", textShadow: "0.2rem 0.3rem 0.1rem #111", letterSpacing: "0.5rem" }}><IconButton><Avatar src={Logo} /></IconButton>REPL</div>
                        <p>In our development community, we focused on brushing up skills, team management, etc. <br />
                        Mainly we provide knowledge on various technologies and try to build influential communication network among all programmer by online meetings.</p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "#ddd" }}>Other Wings</h5>
                        <p><Link to="/" className="text-white" style={{ textDecoration: "none" }} title="Web Development Community"> R-E-P-L&nbsp;</Link></p>
                        <p><Link to="/" className="text-white" style={{ textDecoration: "none" }} title="Android Development Community"> Beat Bots&nbsp;</Link></p>
                        <p><Link to="/" className="text-white" style={{ textDecoration: "none" }} title="Compititive Programming Community"> Brain Chunks&nbsp;</Link></p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "#ddd" }}>Useful links</h5>
                        <p><Link to="/" className="text-white" style={{ textDecoration: "none" }}> Home</Link></p>
                        <p><Link to="/about" className="text-white" style={{ textDecoration: "none" }}> About Us</Link></p>
                        <p><Link to="/project" className="text-white" style={{ textDecoration: "none" }}>Project</Link></p>
                        <p><Link to="/contact" className="text-white" style={{ textDecoration: "none" }}> Contact Us</Link></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "#ddd" }}>Contact</h5>
                        <div>
                            <p><i className="fas fa-home" style={{marginRight: "10px"}}></i>MAKAUT Boy's Hostel, W.B</p>
                            <p><i className="fas fa-envelope" style={{marginRight: "10px"}}></i> repl.development@gmail.com</p>
                            <p style={{ filter: "drop-shadow(0.2rem 0.3rem 0.6rem #000)" }}>
                                <iframe title="googleMap"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7987442923963!2d88.54100141504563!3d22.957637884986035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf5871a9e0d7%3A0x3cbdf3b9f157e355!2sMAKAUT%20MAIN%20CAMPUS!5e0!3m2!1sen!2sin!4v1611843561229!5m2!1sen!2sin"
                                    width="100%" height="100%" frameborder="0" style={{ border: "0" }} allowfullscreen=""
                                    aria-hidden="false" tabindex="0"></iframe></p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <div className="row align-items-center">

                        <div className="col-md-7 col-lg-8">
                            <p> Copyright&copy; {(new Date().getFullYear())} | All rights reserved by:<Link to="/signup" style={{ textDecoration: "none" }}><strong className="text-link">&nbsp;REPL</strong></Link></p>
                        </div>

                        <div className="col-md-5 col-lg-4">
                            <div className="text-center text-md-right">

                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><IconButton><Link to="/" className="btn-floating btn-sm" style={{ fontSize: "25px", color: "#aaa" }}><i
                                            className="fab fa-linkedin-in"></i></Link></IconButton>
                                    </li>
                                    <li className="list-inline-item"><IconButton><Link to="/" className="btn-floating btn-sm" style={{ fontSize: "25px", color: "#aaa" }}><i
                                            className="fab fa-github"></i></Link></IconButton>
                                    </li>
                                    <li className="list-inline-item"><IconButton><Link to="/" className="btn-floating btn-sm " style={{ fontSize: "25px", color: "#aaa" }}><i className="fab fa-facebook-f"></i></Link></IconButton>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
