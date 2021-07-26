import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/pages/navBar/navBar';
import LandingPage from './components/pages/landingPage/landingPage';
import Product from './components/pages/products';
import TrackOrder from './components/pages/trackOrder';
import RetriveDesign from './components/pages/retrieveDesign';
import Error from './components/pages/error';

class App extends Component {
  
  render() { 
    return (<div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/products' component={Product}/>
          <Route exact path='/trackOrder' component={TrackOrder}/>
          <Route exact path='/retrieveDesign' component={RetriveDesign}/>
      
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>);
  }
}
 
export default App;
