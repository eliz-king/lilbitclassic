import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './containers/home';
import ContactMe from './containers/contact';
import './index.scss';

const App = () => (
  <Fragment>
    <Router>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/contact" component={ContactMe} />
      </Switch> 
    </Router>
  </Fragment>
)



export default App;