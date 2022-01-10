import React, { Component } from 'react';
import './NavBar.css'
import { MenuItems } from './MenuItems';

/*

A cool idea i thought about doing:
having a dark mode and light mode but calling it sunset
and dusk

actually have a palette mode

*/ 

class NavBar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        console.log(!this.state.clicked)
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar
