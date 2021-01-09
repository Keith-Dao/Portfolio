import React from 'react';

function Section(props){
    console.log(props)
    return (
        <div className="section">
            <div className="section-title">
                {props.header.replace(/\b\w/g, l => l.toUpperCase())}
            </div>
            <div className="section-content">
                {props.content}
            </div>
        </div>
    );
}

export default Section;