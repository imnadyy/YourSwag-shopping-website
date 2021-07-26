import React, { Component } from 'react';
import './footer.css';
import YourSwag from './components/yourSwag';
import Help from './components/help';
import ShopFor from './components/shopFor';
import FollowUs from './components/followUs';

class Footer extends Component {
    
    render() { 
        return ( 
            <div className="footer">
                <div className='link'>
                    <YourSwag />
                    <Help />
                    <ShopFor />
                    <FollowUs />
                </div>
            </div>
         );
    }
}
 
export default Footer;
