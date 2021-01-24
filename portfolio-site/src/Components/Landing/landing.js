import React from 'react';
import './landing.css';

const Landing = () => {
    return (
        <div id="landing-page">
            <div id="title">
                <div className="title-wrapper">
                    <h1>
                        Keith Dao
                    </h1>
                    <h1>
                        Keith Dao
                    </h1>
                </div>
                <div className="title-wrapper">
                    <h2>
                        Computer Science Undergraduate
                    </h2>
                    <h2>
                        Computer Science Undergraduate
                    </h2>
                </div>
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