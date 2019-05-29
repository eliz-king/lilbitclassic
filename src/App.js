import React from 'react';
import { Link, BrowserRouter as Router,  } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/home';
// import ContactMe from './components/contact';

const App = () => (
  <Router>
    <Navbar />
    <Home/>
    {/* <ContactMe/> */}
    <Footer />
  </Router>
)



export default App;