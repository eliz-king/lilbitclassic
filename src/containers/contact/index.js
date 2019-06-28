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
        <input type='text' id='name' name='name' placeholder='Name' />
        <input type='email' id='email' name='email' placeholder='Email' />
        <textarea id="subject" name="subject" placeholder="Your message..." />
        <button type='submit'>Send</button>
      </form>
    </div>
    <Footer />
  </div>
)

export default ContactMe;