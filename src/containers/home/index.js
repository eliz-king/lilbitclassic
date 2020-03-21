import React from 'react';
import './index.scss';
import Resume from '../../components/Resume';
import ProfilePic from '../../components/ProfilePic';
import Headline from '../../components/headline';
import Profile from '../../components/profile';
import Skills from '../../components/skills';
import Footer from '../../components/footer';


const Home = () => (
  <main class='homepg'>
    <header class='hmtop'>
      <ProfilePic />
      <Headline />
    </header>
    <div class="hmbottom">
      <Profile />
      <Skills />
    </div>
    <footer class="base">
      <Resume />
      <Footer />
    </footer>
  </main>
)

export default Home;
