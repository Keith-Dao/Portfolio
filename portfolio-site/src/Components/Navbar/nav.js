import React from 'react';
import './nav.css';

const NavBar = (props) => {
    return (
    <nav id="main-navbar">
        <div id="nav-links">
            {props.sections.map((section) => 
                <button key={section.header} type="button">
                    {section.header.replace(/\b\w/g, l => l.toUpperCase())}
                </button>
            )}
        </div>
    </nav>
    )
    
};

export default NavBar;