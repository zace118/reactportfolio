import React from 'react';
import './Contact.css';
import zac2 from '../../images/zac2.jpg'


const Contact = () => {

    return (
        <div className="contact">
            <div className="container">
                <h1 className="display-4" style={{ color: 'aliceblue', padding: '20px 0 0s' }}>Contact me!</h1>

                <p className='contactBlurb'>Click the icons below to email me directly or be redirected to my GitHub or LinkedIn profile.</p>

                <ul className="contactList">

                    <i className="fas fa-envelope fa-3x" style={{ color: '#91c9e9' }}></i>
                    <li className="contactListItem" id="email"><a className='linkText' href="mailto:zace118@gmail.com">zace118@gmail.com</a>
                    </li>
                    <br />
                    <i className="fab fa-github fa-3x" style={{ color: '#91c9e9' }}></i>
                    <li className="contactListItem" id="github"><a className='linkText' href="https://github.com/zace118"> /zace118</a>
                    </li>
                    <br />
                    <i className="fab fa-linkedin fa-3x" style={{ color: '#91c9e9' }}></i>
                    <li className="contactListItem" id="linkedin"><a className='linkText' href="https://www.linkedin.com/in/zachary-eskridge/">/in/zachary-eskridge</a></li>
                </ul>
            </div>

            <img className="myOtherPic" src={zac2} alt="me" />
        </div>
    )
};

export default Contact;