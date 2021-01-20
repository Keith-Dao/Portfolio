import React from 'react';
import './nav.css';

const NavBar = (props) => {
    return (
    <nav id="main-navbar">
        <div id="nav-links">
            {props.sections.map((section) => 
                <a href={section.link != null ? section.link : `#${section.header.replace(' ', () => '-')}`} key={section.header}> 
                    <button key={section.header} type="button">
                        {section.header.replace(/\b\w/g, l => l.toUpperCase())}
                    </button>
                </a>
            )}
        </div>
    </nav>
    )
    
};

export default NavBar;