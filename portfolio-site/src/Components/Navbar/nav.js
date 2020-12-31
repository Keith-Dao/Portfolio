import React from 'react';
import './nav.css';

function NavBar(){
    return (
        <nav id="main-navbar">
            <ul className = "nav-links">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </nav>
    );
}

export default NavBar;