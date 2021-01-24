import React from 'react';
import './landing.css';
import jsxMultiplier from '../Utility/utility';

const Landing = () => {
    return (
        <div id="landing-page">
            <div id="title">
                <div className="title-wrapper">
                    {jsxMultiplier(
                        <h1>
                            Keith Dao
                        </h1>, 2)
                    }
                </div>
                <div className="title-wrapper">
                    {jsxMultiplier(
                        <h2>
                        Computer Science Undergraduate
                        </h2>, 2)
                    }
                </div>
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