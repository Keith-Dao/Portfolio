import React, { useState, useEffect, useRef } from 'react';
import './projects.css';

const Project = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Slide changer
    const switchSlides = (index) => {
        setSlideIndex(index);
    }

    // Toggle between slide show and grid
    const toggleLayout = () => {
        props.toggleSlideShow((prev) => !prev);
    }

    // Automatic slide changer
    let slideShowInterval = useRef();
    const startSlideShowTimer = () => {
        const slideShowDuration = 10000; // In milliseconds
        slideShowInterval = setInterval(() => {
            switchSlides((slideIndex + 1) % props.projects.length);
        }, slideShowDuration)
    }

    // Stop automatic slide timer
    const stopSlideShowTimer = () => {
        clearInterval(slideShowInterval);
    }
    
    // Setup timer on startup
    useEffect(() => {
        startSlideShowTimer();
        return () => {
            clearInterval(slideShowInterval);
        };
    });

    return (
        <div id="project-wrapper">
            <div id="layout-selector">
                <label>
                    <div className="toggle">
                        <input type="checkbox" className="toggle-state" onClick={toggleLayout}></input>
                        <div className="toggle-indicator"></div>
                    </div>
                    <div className="label-text">{props.showSlideShow ? "Slide Show" : "Grid"}</div>
                </label>
            </div>
            <div id="slideshow-wrapper" className={props.showSlideShow ? "" : "hide"}>

            </div>
            <div id="grid-wrapper" className={props.showSlideShow ? "hide" : ""}></div>
        </div>
    )
}

export default Project;