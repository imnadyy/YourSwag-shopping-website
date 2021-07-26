import React, { Component } from 'react';

class FollowUs extends Component {
    state = { 
        links: [
            {media: 'Instagram'},
            {media: 'Facebook'},
            {media: 'Twitter'}
        ]
    }
    render() { 
        return ( 
            <div className="links">
                <h5>Follow Us</h5>
                {this.state.links.map((link, index) => (
                    <div>
                        <a href='#' key={index}>{link.media}</a>
                    </div>
                ))}
            </div>
         );
    }
}

export default FollowUs;
