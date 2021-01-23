import React from 'react';
import { useState } from 'react';
import './nav.css';

const NavBar = (props) => {
    const [showNav, toggleNav] = useState(false);

    const toggleNavVisibility = () => {
        showNav ? document.body.classList.remove('scroll-lock') : document.body.classList.add('scroll-lock');
        toggleNav((prev) => !prev);
    }

    return (
    <nav id="main-navbar" className={showNav ? 'show' : ''}>
        <label id="nav-hamburger-wrapper"> 
            <button id="nav-hamburger" onClick={toggleNavVisibility}></button>
        </label>
        <div id="nav-links">
            {props.sections.map((section) => 
                <a href={section.link != null ? section.link : `#${section.header.replace(' ', () => '-')}`} key={section.header}> 
                    <button key={section.header} type="button" onClick={toggleNavVisibility}>
                        {section.header.replace(/\b\w/g, l => l.toUpperCase())}
                    </button>
                </a>
            )}
        </div>
    </nav>
    )
    
};

export default NavBar;