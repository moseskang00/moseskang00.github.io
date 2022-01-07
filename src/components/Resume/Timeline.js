import React, { Component } from 'react'
import './timeline.css'
import { workPositions, education } from './positions';

class Timeline extends Component {
    render() {
        return (
            <div className='container'>
                <div className='title'>Work Experience</div>
                <div className='timeline'>
                    <ul className='resume-items'>
                        {workPositions.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className='left-side'>
                                        <div className='position-title'>
                                            {item.header}
                                        </div>
                                        <div className='date'>
                                            {item.subHeader}
                                        </div>
                                    </div>

                                    <div className='right-side'>
                                        <a className='ext-link' href={item.link}>
                                           <div className='company'>
                                                {item.company}
                                            </div>
                                        </a>
                                        <div className='desc'>
                                            {item.description}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='title'>Education History</div>
                <div className='timeline'>
                    {/* this is for the education */}
                    <ul className='resume-items'>
                        {education.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className='left-side'>
                                        <div className='position-title'>
                                            {item.header}
                                        </div>
                                        <div className='date'>
                                            {item.subHeader}
                                        </div>
                                    </div>

                                    <div className='right-side'>
                                        <a className='ext-link' href={item.link}>
                                            <div className='company'>
                                                {item.school}
                                            </div>
                                        </a>
                                        <div className='gpa'>
                                            GPA: {item.gpa}
                                        </div>
                                        <div className='desc'>
                                            {item.description}
                                        </div>
                                    </div>
                               </li>
                            )
                        })}
                    </ul>
                </div>    
            </div>
        )
    }
}

export default Timeline
