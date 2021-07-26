import React, { Component } from 'react';
import './feature.css';

class Feature extends Component {
    state = { 
        features: [
            {feature: 'Affordable Price', sign:'💲'},
            {feature: 'Fast Turnaround', sign:'⌚'},
            {feature: 'Satisfaction Guartanteed', sign:'👍'},
            {feature: 'Customer Service', sign:'💵'}
        ]
     }
    render() { 
        return (
        <div className='features'>
            {this.state.features.map((f, index) => (
            <div className='feature' key={index}>
                <h5>{f.sign}</h5>
                <h4>{f.feature}</h4>
            </div>))}
        </div>);
    }
}
 
export default Feature;