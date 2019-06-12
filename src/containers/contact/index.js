import React from 'react';
import './index.scss';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Nodemailer from 'nodemailer';

const ContactMe = () => (
  <div>
    <Navbar />
    <div className="contactForm">
      <form action='/contact' method='post'>
      <div className='name'> 
        <input type='text' id='name' name='name' placeholder='Name' />
      </div>
      <div className='email'>
        <input type='email' id='email' name='email' placeholder='Email' />
      </div>
      <div className='msg'>
        <textarea id='msg' name='message' placeholder='Your Message:'></textarea>
      </div>
      </form>
    </div>
    <Footer />
  </div>
)

export default ContactMe;