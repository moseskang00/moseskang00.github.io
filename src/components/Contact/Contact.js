import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <div className='contact-container' id='contact'>
                <div className='contact-start'>
                    <header>Contact</header>
                    <div className='intro'>Let's Connect!</div>
                    <div className='sub-header'>Now I want to learn about you.</div>
                </div>

                <div className='connectables'>
                    <div className='email'>
                        <i class="far fa-envelope-open"></i>
                        <div className='msg'>Email Me At</div>
                        <div className='sub-msg'>mkang41@asu.edu</div>
                    </div>
                    <div className='linkedIn'>
                        <i class="fab fa-linkedin-in"></i>
                        <a href='https://www.linkedin.com/in/moseskang00/' className='linkedin-button'>LinkedIn Profile</a>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default Contact