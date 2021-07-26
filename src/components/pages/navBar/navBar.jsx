import React, { Component } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    
    render() { 
        return ( 
            <div className='navBar'>
                <div className='light-coloured'>
                    <div className="menu">
                        <Link className='linked' to='/'><span>YourSwag</span></Link>
                        <Link className='linked' to='/products'>Products</Link>
                        <Link className='linked' to='/trackOrder'>Track Order</Link>
                        <Link className='linked' to='/retrieveDesign'>Retrieve Design</Link>
                    </div>
                </div>
                <div className='dark-coloured'>
                    <div className='profile'>
                        <button className='navigation account'>My Account</button>
                        <button className='navigation design'>Start Designing</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NavBar;
