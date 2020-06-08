import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {

    state = {
        toggle: false
    }

    render() {
        return (
            <nav className="topNav">
                <div className="logo">
                    <h4>Zac Eskridge</h4>
                </div>

                <ul className={`navLinks ${this.state.toggle ? "nav-active" : ""}`}>
                    <li><a className={`navLinkFade1 ${this.state.toggle ? "toggled" : ""}`} href="#">About Me</a></li>

                    <li><a className={`navLinkFade2 ${this.state.toggle ? "toggled" : ""}`} href="#">Portfolio</a></li>

                    <li><a className={`navLinkFade2 ${this.state.toggle ? "toggled" : ""}`} href="#">Portfolio</a></li>

                    <li><a className={`navLinkFade3 ${this.state.toggle ? "toggled" : ""}`} href="#">Contact Me</a></li>

                </ul>

                <div className="burger" onClick={() => this.setState({ toggle: !this.state.toggle })}>
                    <div className={`line1 ${this.state.toggle ? "toggle" : ""}`}></div>

                    <div className={`line2 ${this.state.toggle ? "toggle" : ""}`}></div>

                    <div className={`line3 ${this.state.toggle ? "toggle" : ""}`}></div>

                </div>
            </nav>
        )
    }
}


export default TopNav;
