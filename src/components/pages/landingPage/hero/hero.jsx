import React, { Component } from 'react';
import './hero.css';
import Content from './content/content';

class Hero extends Component {
    render() { 
        return ( 
        <div className='hero'>
            <Content />
        </div>
        );
    }
}
 
export default Hero;
