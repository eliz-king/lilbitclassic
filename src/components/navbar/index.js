import React from 'react';
import { Link, } from 'react-router-dom';
import './index.scss';

const Navbar = () => (
  <header>
    <Link to='/' className='left brand'>EK</Link>
    <nav className='right'>
      <Link to='/contact'>Contact</Link>
    </nav>
  </header>
)

export default Navbar; 