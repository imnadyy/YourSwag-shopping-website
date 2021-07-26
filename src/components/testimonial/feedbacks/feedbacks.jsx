import React, { Component } from 'react';
import './feedbacks.css';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import customer1 from '../../../pictures/image1.jpg';
import customer2 from '../../../pictures/image2.jpg';
import customer3 from '../../../pictures/image3.jpg';

class Feedbacks extends Component {
    state = { 
        feedbacks: [
            {picture: customer1, userName: 'test user 1', feedback:"Lorem ipsum dolor sit amet, Nunc odio in et, Lorem ipsum dolor sit amet, lectus sit lorem id integer."},
            {picture: customer2, userName: 'test user 2', feedback:"Lorem ipsum dolor sit amet, Nunc odio in et, Lorem ipsum dolor sit amet, lectus sit lorem id integer."},
            {picture: customer3, userName: 'test user 3', feedback:"Lorem ipsum dolor sit amet, Nunc odio in et, Lorem ipsum dolor sit amet, lectus sit lorem id integer."}
        ]
     }
    render() { 
        return ( 
            <div>
                <Carousel interval={1500}>
                    {this.state.feedbacks.map((f,index)=>(
                        <Carousel.Item key={index}>
                            <div className="cust">
                                <div className="customer">
                                    <img src={f.picture} alt='Customer 1'/>
                                    <h4>{f.userName}</h4>
                                    <p>{f.feedback}</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
         );
    }
}
 
export default Feedbacks;
