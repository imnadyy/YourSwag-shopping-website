import React, { Component } from 'react';
import './content.css';
import Heading from './headingSection/heading';
import PicturesSection from './pictureSection/pictures';

class Content extends Component {
    
    render() { 
        return ( 
            <div className='content'>
                <Heading />
                <PicturesSection />
            </div>
         );
    }
}
 
export default Content;