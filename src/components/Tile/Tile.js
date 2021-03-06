import React from 'react';

const Tile = props => {

    const tileStyle = {
        color: 'aliceblue',
        border: '2px solid #1b4965',
        width: '10vw',
        height: '10vh',
        fontSize: '80%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${props.background})`,
        backgroundSize: 'cover'
    };

    const smTitle = {
        backgroundColor: 'black'

    }

    return (
        <div style={tileStyle} onMouseOver={() => props.stateHandler(`${props.title}`, `${props.background}`, `${props.blurb}`)}>
            <h4 style={smTitle}>{props.title}</h4>
        </div>
    )
}

export default Tile;