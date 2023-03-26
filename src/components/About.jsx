import React from 'react';

const About = () => {
    return (
        
        <div className='about-cont'>
            <h2>About Countries App</h2>
            <div className='info-cont'>
                <p>Built as part of React Advanced course in Business College Helsinki. Aim of the project was to get comfortable with React Redux Toolkit and to get familiar with the concept of Authentication using Google Firebase.</p>
                <p>Features include register and login using Firebase, after creating an account you get access to country cards where you can add favorite countries to a favorites list. You can view a single country by clicking the card, in this page you can see some basic information and current weather data using Open Weather API. </p>
                <p>If you want to have a look at Countries App but don't want to create a user feel free to use the test account:</p>
                <p>Email: tester@countries.com</p>
                <p>Password: tester</p>
            </div>
            
        </div>
        
    );
};

export default About;