import React from 'react';
import './landing.css';

const Landing = () => {
    return (
        <div id="landing-page">
            <div id="title">
                {[...Array(2)].map((e, i) => 
                    <div className="title-wrapper" key={`title-wrapper-${i}`}>
                        <h1>Keith Dao</h1>
                        <h2>Computer Science Undergraduate</h2>
                    </div>)}
            </div>
            <div id="scroll-btn">
                <a href="#main-navbar">
                    {[...Array(4)].map((e, i) => 
                        <div className="down arrow" key={`arrow-${i}`}></div>)}
                </a>
            </div>
        </div>
    );
}

export default Landing;