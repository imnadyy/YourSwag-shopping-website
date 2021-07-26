import React, { Component } from 'react';
import Hero from './hero/hero'
import ShowBrands from './showBrands/showBrands';
import Catalog from './productCatalog/catalog';
import Features from './features/features';
import Testimonial from './testimonial/testimonial';
import Footer from './footer/footer';

class LandingPage extends Component {
  
  render() { 
    return (<div>
        <Hero />
        <ShowBrands />
        <Catalog />
        <Features />
        <Testimonial />
        <Footer />
    </div>);
  }
}
 
export default LandingPage;