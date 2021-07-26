import React, { Component } from 'react';
import './showBrands.css';
import Brands from './brands/brands';

class ShowBrands extends Component {

    render() { 
        return ( 
            <div className='showBrands'>
                <div className='tagline'>
                    <h1 className='brand-heading'>20+ brands to choose from</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Nunc odio in et, lectus sit lorem id integer.</p>
                </div>
                <div className='brands-section'>            
                    <Brands />       
                </div>
            </div>
         );
    }
}
 
export default ShowBrands;