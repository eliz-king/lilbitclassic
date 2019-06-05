import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './containers/home';
import ContactMe from './containers/contact';
import './index.scss';

const App = () => (
  <Router>
    <Home />
    <Route exact path="/Contact" compoent={ContactMe} />
  </Router>
)



export default App;