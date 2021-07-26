import React, { Component } from 'react';
import './brands.css';
import adidas from '../../../../../pictures/adidas.png';


class Brands extends Component {
    state = { 
        logos: [
            {Brand: 'Adidas', logo: adidas},
            {Brand: 'Adidas', logo: adidas},
            {Brand: 'Adidas', logo: adidas},
            {Brand: 'Adidas', logo: adidas},
            {Brand: 'Adidas', logo: adidas},
            {Brand: 'Adidas', logo: adidas}
        ]
     }

    render() { 
        return ( 
            <div className='brands-container'>
                <div className="row-1">
                    <img src={this.state.logos[0].logo} alt={this.state.logos[0].Brand} />
                    <img src={this.state.logos[1].logo} alt={this.state.logos[1].Brand} />
                    <img src={this.state.logos[2].logo} alt={this.state.logos[2].Brand} />
                </div>
                <div className="row-2">
                    <img src={this.state.logos[3].logo} alt={this.state.logos[3].Brand} />
                    <img src={this.state.logos[4].logo} alt={this.state.logos[4].Brand} />
                    <img src={this.state.logos[5].logo} alt={this.state.logos[5].Brand} />
                </div>

            </div>
         );
    }
}
 
export default Brands;