import React from 'react';
import './nav.css';

function NavBar(){
    return (
        <nav id="main-navbar">
            <div className = "logo">Keith Dao</div> {/* Change this to an image later*/}
            <div className = "nav-links-container">
                <ul className = "nav-links">
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;