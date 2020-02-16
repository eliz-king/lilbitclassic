import React from 'react';
import './index.scss';
import Resume from '../../components/Resume';
import MePic from '../../components/pic';
import Headline from '../../components/headline';
import Profile from '../../components/profile';
import Skills from '../../components/skills';
import Footer from '../../components/footer';


const Home = () => (
  <div class='homepg'>
    <div class='hmtop'>
      <MePic />
      <Headline />
    </div> 
    <div class="hmbottom"> 
      <Profile />
      <Skills />
    </div>
    <div class = "footer">
      <Resume />
      <Footer /> 
    </div>  
  </div>
)

export default Home;