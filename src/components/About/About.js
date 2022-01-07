import React, { Component } from 'react'
import './About.css'
import portrait from '../../Images/portriat.JPG';

class About extends Component {
    render(){
        return (
            <div className='about-section'>
                <header>About</header>
                <div className='about-main'>
                    <div className='portrait'>
                        <img src={portrait}></img>
                    </div>
                    <div className='main-intro'>
                        <div className='intro'>
                            Hi, It's nice to meet you!
                        </div>
                        <div className='detail-section'>
                            I'm a software engineer studying computer science with a minor in film and media
                            production at Arizona State University, and I will be graduating Spring 2022. 
                            Currently, I am working part time as both a Swift iOS developer for my university and a VR 
                            developer at the Immersive Creative Studios. 
                            My primary areas of interests involve API and back-end development as well as full stack development.
                        </div>
                        <div className='languages'>
                            <div>
                                <span className='subheader'>Primary Languages:</span> Python, Java, JavaScript/TypeScript, SwiftUI, C/C++, HTML, CSS
                            </div>
                            <div>
                                <span className='subheader'>Frameworks and Tools:</span> React.js, Node.js, Restful APIs, FireBase, PostgreSQL, Git
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About