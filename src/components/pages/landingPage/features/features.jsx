import React, { Component } from 'react';
import Feature from './feature/feature';
import './features.css';

class Features extends Component {
    
    render() { 
        return ( 
        <div className='features-container'>
            <h1>Why YourSwag Is Fit For You</h1> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Feature />     
        </div>
        );
    }
}
 
export default Features;