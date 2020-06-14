import React, { useState } from 'react';
import './Portfolio.css';
import Button from '../Button/Button';
import Tile from '../Tile/Tile';
import CrusineBG from '../../images/Crusine.png';
import PasswordGeneratorBG from '../../images/PasswordGenerator.png';
import FoodForTwoBG from '../../images/FoodForTwo.png';
import WeatherAppBG from '../../images/WeatherApp.png';
import ShapeShifterBG from '../../images/ShapeShifter.png';
import BottomsUpBG from '../../images/Login_BottomsUp.png';

const Portfolio = () => {

    const [bgState, setBgState] = useState();
    const [bgTitle, setBgTitle] = useState('');
    const [bgBlurb, setBgBlurb] = useState('');

    const portStyle = {
        margin: '2vh 5vw 0',
        height: '50vh',
        backgroundImage: `url(${bgState})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.5s linear',
    };

    const bgHandler = (title, bg, blurb) => {
        setBgTitle(title)
        setBgState(bg)
        setBgBlurb(blurb)
    };

    return (
        <div>
            <div style={portStyle}></div>

            <h1 className='projectTitle'>{bgTitle}</h1>

            <p className='projectBlurb'>{bgBlurb}</p>


            <div className='buttonDiv'>
                <Button input='See the Code' />
                <Button input='See the Project' />
            </div>

            <div className='tileDiv'>

                <Tile title='Crusine'
                    background={CrusineBG}
                    bgHandler={bgHandler}
                    blurb={`Built with: 
                    React,
                    Javascript,
                    Chart.js,
                    MySQL
                    `}
                />

                <Tile title='Password Generator'
                    background={PasswordGeneratorBG}
                    bgHandler={bgHandler}
                    blurb={`Built with: 
                    Javascript,
                    jQuery
                    `}
                />

                <Tile title='Food For Two!'
                    background={FoodForTwoBG}
                    bgHandler={bgHandler}
                    blurb={`Built with: 
                    Javascript,
                    jQuery,
                    WebAPIs,
                    AJAX
                    `}
                />

                <Tile title='Weather App'
                    background={WeatherAppBG}
                    bgHandler={bgHandler}
                    blurb={`Built with: 
                    Javascript,
                    jQuery,
                    Web APIs,
                    Ajax
                    `}
                />

                <Tile title='Shape Shifter'
                    background={ShapeShifterBG}
                    bgHandler={bgHandler}
                    blurb={`Built with: 
                    React,
                    Javscript
                    `}
                />

                <Tile title='Bottoms Up'
                    background={BottomsUpBG}
                    bgHandler={bgHandler}
                    blurb={`Built with: 
                    jQuery,
                    Node.js,
                    Express.js,
                    MySQL,
                    Sequelize
                    `}
                />
            </div>
        </div>

    )
};

export default Portfolio;