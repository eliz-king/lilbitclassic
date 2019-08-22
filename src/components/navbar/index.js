import React from 'react';
import { Link, } from 'react-router-dom';
import './index.scss';

const Navbar = () => (
  <nav>
    <Link to='/' className='left brand'>EK</Link>
    <Link to='/contact' className="right">Message Me!</Link>    
  </nav>
)

export default Navbar; 