import React, { Component } from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import { iconItems } from './iconItems'

class Home extends Component{
    render() {
        return(
            <div>
                <div className='background-image'>
                    <NavBar />
                    <div className='title-card'>
                        <div className='title-edit'>
                            <h1 className='name-card'>Moses Kang</h1> 
                            <div className='roles-card'>Software Engineer | Computer Science Student at ASU</div>
                            <ul className='icons'>
                            {iconItems.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a className={item.iconName} href={item.link}></a>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home 