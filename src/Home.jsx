import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer.jsx';
import bird1 from './images/bird1.png';
import bird2 from './images/bird2.png';
import forest from './images/forest.png';
import rocks from './images/rocks.png';
import water from './images/water.png';
import Lottie from 'react-lottie';
import student from './json/student.json';
import code from './json/codeblock.json';


const aniStudent = {
    loop: true,
    autoplay: true,
    animationData: student,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const aniCode = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offsetY])
    return (
        <div className="home">
            <div className="section">
                <h2 className="text" style={{ transform: `translateY(${offsetY * (-0.9)}%)` }} ><span>Let's Code Together on</span><br />webDev</h2>
                <img src={bird1} alt="" className="bird1" style={{ left: `${offsetY * (1.5)}px`, top: `${offsetY * (-1.4)}px` }} />
                <img src={bird2} alt="" className="bird2" style={{ top: `${offsetY * (-1.5)}px`, left: `${offsetY * (-4)}px` }} />
                <img src={forest} alt="" className="forest" style={{ top: `${offsetY * (0.25)}px` }} />
                <Link className="button" to="/project" style={{ marginTop: `${offsetY * (1.4)}px` }} >Explore</Link>
                <img src={rocks} alt="" className="rocks" style={{ top: `${offsetY * (-0.10)}px` }} />
                <img src={water} alt="" className="water" />
            </div>
            <div className="container0">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-12 col-12 mx-auto">
                            <div className="row d-flex jusify-content-center align-items-center">
                                <div className="sec1 col-md-6 col-12 order-md-0 order-1">
                                    <h2><span>What's&nbsp; R-E-P-L ?</span></h2>
                                    <ol><li><p><u>Read Eval Print Loop</u> in short R-E-P-L. This is a Web Development Community, in fact, the name defines its meaning. Yes, it is as simple as you think.</p></li> <br />
                                    <li><p>So, the name of REPL is taken from the concept of a simple interactive computer programming environment that takes a single user input, executes them, and returns the result to the user, a program written in a REPL environment is executed piecewise.</p></li> <br />
                                    <li><p>As the term is usually used to refer to programming interfaces similar to the classic Lisp machine interactive environment,  command-line shells, and the technique is very characteristic of scripting languages,  that's why it calls  R-E-P-L.</p></li><br />
                                    <li><p>This web development community follows one unique motto "Let's Code Together". In a good spirit, We welcome all programmers to join us and showcase talent as well as grow with us.</p></li></ol>
                                </div>
                                <div className="sec2 col-md-6 col-12">
                                    <Lottie options={aniStudent} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-12 col-12 mx-auto">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="sec2 col-md-6 col-12">
                                    <Lottie options={aniCode} />
                                </div>
                                <div className="sec1 col-md-6 col-12 order-md-0 order-1">
                                    <h2><span>Why R-E-P-L ?</span></h2>
                                    <ol><p>Web development is the key to making creative and imaginary things lifelike.</p><br />
                                    <li><p>Through REPL, we will make students aware of the services or products that web services offers, understand why web products are relevant and even necessary. </p></li> <br />
                                    <li><p>In this REPL community, we have gathered a group of developers in a place to achieve a common goal. </p></li><br />
                                    <li><p>This resemblance a team answering technical questions or having a senior developer answering questions. Making it a self-sufficient community that answers each other's questions.</p></li></ol>
                                    <Link className="button1" to="/about">Know Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
