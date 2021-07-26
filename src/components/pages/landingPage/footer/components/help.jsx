import React, { Component } from 'react';

class Help extends Component {
    state = { 
        links: ['Track Order', 'Frequently Asked Questions', 'Customer Care']
     }
    render() { 
        return ( 
            <div className='links'>
                <h5>Help</h5>
                {this.state.links.map((link, index) => (
                    <div>
                        <a href='#' key={index}>{link}</a>
                    </div>
                ))}

            </div>
         );
    }
}
 
export default Help;