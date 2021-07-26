import React, { Component } from 'react';
import './pictures.css';
import image1 from '../../../../../../pictures/image1.jpg';
import image2 from '../../../../../../pictures/image2.jpg';
import image3 from '../../../../../../pictures/image3.jpg';
import image4 from '../../../../../../pictures/product13.png';

class PictureSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="picture-section">
                <div className="minor-sec">
                </div>
                <div className="major-sec">
                    <div className='first-cut'></div>
                    <img src={image1} alt="image1" className='image1'/>
                    <img src={image2} alt="image2" className='image2'/>
                    <img src={image3} alt="image3" className='image3'/>
                    <img src={image4} alt="image3" className='image4'/>
                    <div className='second-cut'></div>
                    <div className='third-cut'></div>

                </div>

            </div>
         );
    }
}
 
export default PictureSection;