import React from 'react';
import Section from './section'
import './content.css';

function Content(props){
    return (
        <div id="content">
            {props.sections.map((section) => 
                <Section key={"section_"+section.header} header={section.header} content={section.content} />
            )}
        </div>
    );
}

export default Content;