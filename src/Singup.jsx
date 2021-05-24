import React, { Component } from 'react'
import './Singup.css'
import log from './images/log.svg';
import register from './images/register.svg'
import { IconButton } from '@material-ui/core';

class Singup extends Component {
    state = { clicked: false }
    handelClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <div>
                <div className={this.state.clicked ? " sign-up-mode main-container" : "sign-in-mode main-container"}>
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">Sign in</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <input type="submit" value="Login" className="bttn solid " />
                                <p className="social-text">Or Sign in with social platforms</p>
                                <div className="social-media">
                                    <a href="https://facebook.com" className="social-icon">
                                        <IconButton><i className="fab fa-facebook-f" /></IconButton>
                                    </a>
                                    <a href="https://twitter.com" className="social-icon">
                                        <IconButton><i className="fab fa-twitter" /></IconButton>
                                    </a>
                                    <a href="https://google.com" className="social-icon">
                                        <IconButton><i className="fab fa-google" /></IconButton>
                                    </a>
                                    <a href="https://linkedin.com" className="social-icon">
                                        <IconButton><i className="fab fa-linkedin-in" /></IconButton>
                                    </a>
                                </div>
                            </form>
                            <form action="#" className="sign-up-form">
                                <h2 className="title">Sign up</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <input type="submit" className="bttn" value="Sign up" />
                                <p className="social-text">Or Sign up with social platforms</p>
                                <div className="social-media">
                                    <a href="https://facebook.com" className="social-icon">
                                        <IconButton><i className="fab fa-facebook-f" /></IconButton>
                                    </a>
                                    <a href="https://twitter.com" className="social-icon">
                                        <IconButton><i className="fab fa-twitter" /></IconButton>
                                    </a>
                                    <a href="https://google.com" className="social-icon">
                                        <IconButton><i className="fab fa-google" /></IconButton>
                                    </a>
                                    <a href="https://linkedin.com" className="social-icon">
                                        <IconButton><i className="fab fa-linkedin-in" /></IconButton>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>New here ?</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                    ex ratione. Aliquid!
                            </p>
                                <button className="bttn transparent" id="sign-up-btn" onClick={this.handelClick}>Sign up</button>
                            </div>
                            <img src={log} className="image" alt="" />
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>One of us ?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                    laboriosam ad deleniti.
            </p>
                                <button className="bttn transparent" id="sign-in-btn" onClick={this.handelClick}>Sign in</button>
                            </div>
                            <img src={register} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Singup
