import React, { Component } from 'react'
import './Project.css'
import { ProjectList } from './ProjectList'

class Project extends Component{
    render () {
        return (
            <div className='project-container' id='projects'>
                <header>Projects</header>
                <div className='subHeader'>
                    Check out some of my projects!
                </div>

                <div className='projects'>
                    {ProjectList.map((item,index) => {
                        return (
                            <div key={index} className='project-item'>
                                <img className='image-edit' src={item.image}/>
                                <div className='proj-title'>{item.title}</div>
                                <div className='proj-desc'>{item.description}</div>
                                <a href={item.link} className='proj-link'>
                                    <div>Github Repo</div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Project