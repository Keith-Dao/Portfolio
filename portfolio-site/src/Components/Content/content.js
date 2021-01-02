import React from 'react';
import Section from './section'
import './content.css';

function Content(){
    return (
        <div id="content">
            <Section title={'Test'} />
            <Section title={'|'} />
            <Section title={'123'} />
        </div>
    );
}

export default Content;