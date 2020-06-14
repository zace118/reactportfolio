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
    const [codeURL, setCodeURL] = useState('');
    const [depProjURL, setDepProjURL] = useState('');

    const portStyle = {
        margin: '2vh 5vw 0',
        height: '50vh',
        backgroundImage: `url(${bgState})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.5s linear',
    };

    const stateHandler = (title, bg, blurb) => {
        setBgTitle(title);
        setBgState(bg);
        setBgBlurb(blurb);

        //Switch case for setting depProjState and codeState
        switch (bgTitle) {
            case 'Crusine':
                setCodeURL('https://github.com/Evan-M-Py/crusine');
                setDepProjURL('https://crusine.herokuapp.com/');
                break;

            case 'Password Generator':
                setCodeURL('https://github.com/zace118/HW-Password-Generator');
                setDepProjURL('https://zace118.github.io/HW-Password-Generator/');
                break;

            case 'Food For Two!':
                setCodeURL('https://github.com/williamrichman/Project1');
                setDepProjURL('https://williamrichman.github.io/Project1/');
                break;

            case 'Weather App':
                setCodeURL('https://github.com/zace118/HW-Weather-App');
                setDepProjURL('https://zace118.github.io/HW-Weather-App/');
                break;

            case 'Shape Shifter':
                setCodeURL('https://github.com/zace118/ShapeShifter');
                setDepProjURL('https://shapeshifter-zace118.netlify.app/');
                break;

            case 'Bottoms Up':
                setCodeURL('https://bottoms-up-app.herokuapp.com/');
                setDepProjURL('https://github.com/zace118/BottomsUp');
                break;

            default:
                break;
        };

    }

    return (
        <div>
            <div className='screenshot' style={portStyle}></div>

            <h1 className='projectTitle'>{bgTitle}</h1>

            <p className='projectBlurb'>{bgBlurb}</p>


            <div className='buttonDiv'>
                <Button id='code' input='See the Code'
                    url={codeURL} />
                <Button id='depProj' input='See the Project'
                    url={depProjURL} />
            </div>

            <div className='tileDiv'>

                <Tile title='Crusine'
                    background={CrusineBG}
                    stateHandler={stateHandler}
                    blurb={`Built with: 
                    React,
                    Javascript,
                    Chart.js,
                    MySQL
                    `}
                />

                <Tile title='Password Generator'
                    background={PasswordGeneratorBG}
                    stateHandler={stateHandler}
                    blurb={`Built with: 
                    Javascript,
                    jQuery
                    `}
                />

                <Tile title='Food For Two!'
                    background={FoodForTwoBG}
                    stateHandler={stateHandler}
                    blurb={`Built with: 
                    Javascript,
                    jQuery,
                    WebAPIs,
                    AJAX
                    `}
                />

                <Tile title='Weather App'
                    background={WeatherAppBG}
                    stateHandler={stateHandler}
                    blurb={`Built with: 
                    Javascript,
                    jQuery,
                    Web APIs,
                    Ajax
                    `}
                />

                <Tile title='Shape Shifter'
                    background={ShapeShifterBG}
                    stateHandler={stateHandler}
                    blurb={`Built with: 
                    React,
                    Javscript
                    `}
                />

                <Tile title='Bottoms Up'
                    background={BottomsUpBG}
                    stateHandler={stateHandler}
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