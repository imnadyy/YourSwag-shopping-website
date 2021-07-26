import React, { Component } from 'react';

class ShopFor extends Component {
    state = { 
        links: ['T-shirts', 'Hoodies', 'Sweatshirts','Activewear']
     }
    render() { 
        return ( 
            <div className="links">
                <h5>Shop For</h5>
                {this.state.links.map((link, index) => (
                    <div>
                        <a href='#' key={index}>{link}</a>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default ShopFor;