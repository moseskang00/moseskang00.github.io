import React, { Component } from 'react';
import './resume.css';
import { workPositions, education } from './positions';
import Timeline from './Timeline';

class Resume extends Component {
    render() {
        return (
            <div className='resume-section'>
                <header>Resume</header>
                {/* this is for the work positions */}

                <Timeline/>
            </div>
        )
    }
}

export default Resume