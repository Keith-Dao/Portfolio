import React from 'react';
import './landing.css';
import jsxMultiplier from '../Utility/utility';

const Landing = () => {
    return (
        <div id="landing-page">
            <div id="title">
                {jsxMultiplier(
                <div className="title-wrapper">
                        <h1>Keith Dao</h1>
                        <h2>Computer Science Undergraduate</h2>
                </div>, 2)}
            </div>
            <div id="scroll-btn">
                <a href="#main-navbar">
                    {jsxMultiplier(
                        <div className="down arrow"></div>, 4)
                    }
                </a>
            </div>
        </div>
    );
}

export default Landing;