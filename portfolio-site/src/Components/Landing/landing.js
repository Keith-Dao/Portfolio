import React from 'react';
import './landing.css';

const Landing = () => {
    return (
        <div id="landing-page">
            <div id="title">
                <h1>
                    <div>Keith Dao</div>
                </h1>
                <h2>
                    <div>Computer Science Undergraduate</div>
                </h2>
            </div>
            <div id="scroll-btn">
                <a href="#main-navbar">
                    <div className="down arrow"></div>
                    <div className="down arrow"></div>
                </a>
            </div>
        </div>
    );
}

export default Landing;