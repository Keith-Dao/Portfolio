import React, { useState, useEffect, useRef } from 'react';
import './projects.css';

const Project = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Reset slide
    const resetSlides = () => {
        setSlideIndex(0);
    }

    // Slide changer
    const switchSlides = (index) => {
        setSlideIndex(index);
    }

    // Toggle between slide show and grid
    const toggleLayout = () => {
        if (!props.showSlideShow) {
            resetSlides();
        }
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
    
    // Setup timer on startup
    useEffect(() => {
        if (props.showSlideShow) {
            startSlideShowTimer();
            return () => {
                clearInterval(slideShowInterval);
            };
        }
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
            <div id="slideshow-wrapper" className={props.showSlideShow ? "" : "hide"} style={{backgroundImage:`url(${props.projects[slideIndex].image})`}}>
                <img src={props.projects[slideIndex].image} alt="project screenshot"/>
                <div id="slideshow-controller" className={props.projects[slideIndex].theme}>
                    <div className="slideshow-arrow back" onClick={() => {
                        switchSlides(() => slideIndex - 1 < 0 ? props.projects.length - 1: slideIndex - 1);
                    }}></div>
                    <div id="slideshow-description-wrapper">
                        <div id="slideshow-title">
                            {props.projects[slideIndex].name}
                        </div>
                        <div id="slideshow-description">
                            {props.projects[slideIndex].description}
                        </div>
                        <a id="slideshow-link" href={props.projects[slideIndex].link} target="_blank" rel="noreferrer">
                            Click to view project
                        </a>
                    </div>
                    <div className="slideshow-arrow forward" onClick={() => {
                        switchSlides((slideIndex + 1) % props.projects.length);
                    }}></div>
                    <div id="slideshow-jumper-wrapper">
                        {props.projects.map((project, index) => {
                            return <div className={index === slideIndex ? "slideshow-jumper slide-active" : "slideshow-jumper"} key={project.name} onClick={() => {
                                switchSlides(index);
                            }}></div>
                        })}
                    </div>
                </div>
            </div>
            <div id="grid-wrapper" className={props.showSlideShow ? "hide" : ""}></div>
        </div>
    )
}

export default Project;