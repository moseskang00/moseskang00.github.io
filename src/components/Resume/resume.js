import React, { Component } from 'react';
import './resume.css';
import Timeline from './Timeline';

class Resume extends Component {
    render() {
        return (
            <div className='resume-section' id='resume'>
                <header>Resume</header>
                {/* this is for the work positions */}

                <Timeline/>
            </div>
        )
    }
}

export default Resume