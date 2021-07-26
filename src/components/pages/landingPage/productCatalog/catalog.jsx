import React, { Component } from 'react';
import './catalog.css';
import Product from './products/product';

class Catalog extends Component {
    
    render() { 
        return (
            <div className='catalog'>
                <h1>Product Catalog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
             
                <Product />
            </div>
        );
    }
}
 
export default Catalog;
