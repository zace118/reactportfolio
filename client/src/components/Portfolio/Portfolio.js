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

    const portStyle = {
        backgroundImage: `url(${bgState})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.5s linear',
    };

    const bgHandler = (title, bg) => {
        setBgTitle(title)
        setBgState(bg)
    };

    return (
        <div className='' style={portStyle}>

            <div className='text'>
                <h1 className='projectTitle'>{bgTitle}</h1>

                <p className='projectBlurb'>Migas fingerstache leggings tilde. Try-hard normcore literally bespoke craft beer hammock. Scenester taiyaki air plant biodiesel, drinking vinegar tattooed messenger bag. Yuccie jianbing four loko leggings helvetica +1 vice literally. Celiac kitsch sriracha, yuccie la croix banh mi portland keytar. Man braid subway tile shaman hoodie, lo-fi man bun locavore biodiesel.</p>
            </div>


            <div className='buttonDiv'>
                <Button input='See the Code' />
                <Button input='See the Project' />
            </div>

            <div className='tileDiv'>

                <Tile title='Crusine'
                    background={CrusineBG}
                    bgHandler={bgHandler}
                />

                <Tile title='Password Generator'
                    background={PasswordGeneratorBG}
                    bgHandler={bgHandler}
                />

                <Tile title='Food For Two!'
                    background={FoodForTwoBG}
                    bgHandler={bgHandler}
                />

                <Tile title='Weather App'
                    background={WeatherAppBG}
                    bgHandler={bgHandler}
                />

                <Tile title='Shape Shifter'
                    background={ShapeShifterBG}
                    bgHandler={bgHandler}
                />

                <Tile title='Bottoms Up'
                    background={BottomsUpBG}
                    bgHandler={bgHandler}
                />
            </div>

        </div>
    )
};

export default Portfolio;