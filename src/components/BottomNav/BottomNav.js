import React, { Component } from 'react';
import './BottomNav.css';

class BottomNav extends Component {

    render() {
        return (
            <footer className="footer">
                <div id="icons">
                    {/* Github Icon */}
                    <a href="https://github.com/zace118"><i className="fab fa-github-square fa-2x"
                        id="githubIcon" style={{ color: "#304D6D" }}></i>
                    </a>
                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/zachary-eskridge/"><i className="fab fa-linkedin fa-2x"
                        id="linkedinIcon" style={{ color: "#304D6D" }}></i>
                    </a>
                </div>
            </footer>
        )
    }
}


export default BottomNav;
