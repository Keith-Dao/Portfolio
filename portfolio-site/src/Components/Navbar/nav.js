import React from 'react';
import './nav.css';

const NavBar = (props) => {
    return (
    <nav id="main-navbar">
        <label id="nav-hamburger-wrapper"> 
            <input type="checkbox" id="nav-hamburger" onChange={() => {
                document.getElementById('main-navbar').classList.toggle('show');
                document.body.classList.toggle('scroll-lock')
            }}></input>
        </label>
        <div id="nav-links">
            {props.sections.map((section) => 
                <a href={section.link != null ? section.link : `#${section.header.replace(' ', () => '-')}`} key={section.header}> 
                    <button key={section.header} type="button" onClick={() => {
                        document.getElementById('nav-links').classList.remove('show')
                        document.body.classList.remove('scroll-lock')
                    }}>
                        {section.header.replace(/\b\w/g, l => l.toUpperCase())}
                    </button>
                </a>
            )}
        </div>
    </nav>
    )
    
};

export default NavBar;