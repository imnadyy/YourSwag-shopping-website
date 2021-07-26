import React, { Component } from 'react';
import Feedbacks from './feedbacks/feedbacks';
import './testimonial.css';

class Testimonial extends Component {
    
    render() { 
        return ( 
            <div className='testimonial'>
                <div className="customer-feedback">
                    <Feedbacks />
                </div>
                <div className="test-heading">
                    <div className="test-tagline">
                        <p>Testimonial</p>
                        <h1>What our customers have to say about us.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Nunc odio in et, lectus sit lorem id integer.</p>
                        <button>See more</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Testimonial;
