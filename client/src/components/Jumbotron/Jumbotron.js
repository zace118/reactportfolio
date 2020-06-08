import React, { Component } from 'react';
import './Jumbotron.css';
import zac from '../../images/zac.jpeg'
class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron" id="aboutMe">
                <img className="myPic" src={zac} />

                <div className="blurb">
                    <h1 id="blurbTitle">Hello, and welcome to my portfolio! </h1>

                    <p id="blurbBody">
                        I am Zac Eskridge, a full-stack web developer aiming toward making user experience on the web more intuitive. Currently completing a full-stack coding boot camp course through the University of Arizona in Gilbert, AZ. I also have a background in leadership and management, professionally and from the creative arts. I'm skilled at overcoming tasks and obstacles through teamwork and
                        ingenuity. I am ecstatic to hone my skills toward building a tight-knit team focused on building a more user-friendly
                        web. Thanks for stopping by! Before you go, check out some of my projects in my portfolio!
                    </p>

                    <h2 id="navBlurb">Let's go!  <i class="fas fa-caret-right"></i></h2>
                </div>


            </div>
        )
    }
}


export default Jumbotron;
