import React from 'react';
// import './Button.css';

const Button = props => {

    const buttonStyle = {
        color: 'aliceblue',
        backgroundColor: '#235e82',
        border: '2px solid #1b4965',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px 32px',
        boxShadow: '10px 5px 5px gray',
        borderRadius: '8px'
    }

    return (
        <a href={props.url}>
            <input type="button" className="button" value={props.input} style={buttonStyle} />
        </a>
    )
}

export default Button;