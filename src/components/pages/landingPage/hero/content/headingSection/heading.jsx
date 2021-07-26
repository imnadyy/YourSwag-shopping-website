import React, { Component } from 'react';
import './heading.css';

class Heading extends Component {
    
    render() { 
        return ( 
            <div className="heading-section">
                <div className='tagline-container'>
                    <h1 className='tag-line'>Designed to fit<br/>
                        Loved for Style
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                        Nunc odio in et, lectus sit lorem id integer.</p>
                    <button>Browse Products</button>
                </div>
            </div>
         );
    }
}
 
export default Heading;