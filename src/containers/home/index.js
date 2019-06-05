import React from 'react';
import './index.scss';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Profile from '../../components/profile';
import Skills from '../../components/skills';
import Footer from '../../components/footer';


const Home = () => (
  <div class='homepg'> 
    <Navbar />
    <Header />
    <Profile />
    <Skills />
    <Footer /> 
  </div>
)

export default Home;