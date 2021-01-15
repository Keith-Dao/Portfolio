import React from 'react';
import './nav.css';

const NavBar = (props) => {
    return (
    <nav id="main-navbar">
        <ul className = "nav-links">
            {props.sections.map((section) => 
                <li key={section.header}>
                    {section.header.replace(/\b\w/g, l => l.toUpperCase())}
                </li>
            )}
        </ul>
    </nav>
    )
    
};

export default NavBar;