import React, { Component } from 'react';
import './hero.css';
import NavBar from './navBar/navBar';
import Content from './content/content';

class Hero extends Component {
    
    render() { 
        return ( 
        <div className='hero'>
            <NavBar />
            <Content />
        </div>
        );
    }
}
 
export default Hero;
