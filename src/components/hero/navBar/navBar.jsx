import React, { Component } from 'react';
import './navBar.css';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='navBar'>
                <div className='light-coloured'>
                    <div className="menu">
                        <a href="#"><span>YourSwag.</span></a>
                        <a href="#">Products</a>
                        <a href="#">Track Order</a>
                        <a href="#">Retreive Design</a>
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