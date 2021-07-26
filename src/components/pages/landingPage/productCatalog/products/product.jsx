import React, { Component } from 'react';
import './product.css';
import product1 from '../../../../../pictures/product11.png';
import product2 from '../../../../../pictures/product12.png';
import product3 from '../../../../../pictures/product13.png';
import product4 from '../../../../../pictures/product14.png';

class Product extends Component {
    state = { 
        products: [
            {product: 'T-shirts', image:product1},
            {product: 'Hoodies', image:product2},
            {product: 'Sweatshirts', image:product3},
            {product: 'Activewear', image: product4}
        ]
     }
    render() { 
        return (
            <div className='products'>
               {this.state.products.map((p, index) => (
                   <div className='product' key={index}>
                        <h5><a href="#">{p.product}</a></h5>                        
                        <img src={p.image} alt={p.product}/>
                   </div>
               ))} 
            </div>
        );
    }
}
 
export default Product;