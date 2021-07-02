import React, { Component } from 'react';

class YourSwag extends Component {
    state = { 
        links: ['Terms & Condition', 'Fees & Payment', 'Returns & Refunds']
     }
    render() { 
        return ( 
            <div className='links'>
                <h5>YourSwag</h5>
                {this.state.links.map((link, index) => (
                    <div>
                        <a href='#' key={index}>{link}</a>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default YourSwag;