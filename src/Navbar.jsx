import { Avatar, IconButton } from '@material-ui/core';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.png';
class Navbar extends Component {
    state = { clicked: false }
    handelClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <div className="col-md-12 col-12">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <div className="hamburger" onClick={this.handelClick}>
                        <div className={this.state.clicked ? "line open" : "line"}></div>
                    </div>
                    <div className="logo"><IconButton><Avatar src={logo} /></IconButton>REPL</div>
                    <ul className={this.state.clicked ? 'nav-links open' : 'nav-links'}>
                        <li onClick={this.handelClick} style={{ transition: 'all 0.5s ease 0.2s' }}><NavLink exact activeClassName="active" to="/"><IconButton>Home</IconButton></NavLink></li>

                        <li onClick={this.handelClick} style={{ transition: 'all 0.5s ease 0.2s' }}><NavLink exact activeClassName="active" to="/about"><IconButton>About</IconButton></NavLink></li>

                        <li onClick={this.handelClick} style={{ transition: 'all 0.5s ease 0.2s' }}><NavLink exact activeClassName="active" to="/project"><IconButton>Project</IconButton></NavLink></li>

                        <li onClick={this.handelClick} style={{ transition: 'all 0.5s ease 0.2s' }}><NavLink exact activeClassName="active" to="/contact"><IconButton>Contact</IconButton></NavLink></li>

                        <li onClick={this.handelClick} style={{ transition: "all 0.5s ease 0.2s" }}><NavLink exact activeClassName="active" className="signup" to="/singup"><IconButton>Sign Up</IconButton></NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
