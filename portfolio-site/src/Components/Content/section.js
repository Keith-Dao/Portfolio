import React from 'react';
// import './section.css';

function Section(props){
    return (
        <div class="section">
            <div class="section-title">
                {props.title}
            </div>
            <div class="section-content">
                This is where the content goes
                {props.content}
            </div>
        </div>
    );
}

export default Section;