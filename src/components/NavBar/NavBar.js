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
                <ul className='nav-menu'>
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
