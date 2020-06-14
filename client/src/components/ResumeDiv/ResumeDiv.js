import React from 'react';
import Resume from '../../images/resume.png';
// import Button from '../Button/Button';
import './ResumeDiv.css';

const ResumeDiv = () => {

    const resumeStyle = {
        // WORKING AND NEEDS TO STAY
        backgroundImage: `url(${Resume})`
    };

    return (
        <div>
            <button id='download'>
                <a href='../../../assets/Zac Eskridge_Resume.pdf' download>
                    Click here to download a PDF copy
                </a>
            </button>

            <div className="resume" style={resumeStyle}>
            </div>
        </div>

    )
};

export default ResumeDiv;