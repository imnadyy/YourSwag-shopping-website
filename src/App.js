import React, { Component } from 'react';
import Hero from './components/hero/hero'
import ShowBrands from './components/showBrands/showBrands';
import Catalog from './components/productCatalog/catalog';
import Features from './components/features/features';
import Testimonial from './components/testimonial/testimonial';
import Footer from './components/footer/footer';

class App extends Component {
  
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
 
export default App;
