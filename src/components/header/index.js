import React from 'react';
import './index.scss';
import Picture from '../../assets/images/porfolio.jpg';

const Header = () => (
  <>
  <div className="aboutPic">
    <img src={Picture} className=''/>
  </div>
  <div className='about'>
    <h1>Making and breaking code one line at a time...</h1>
      <p className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna quam, 
      vestibulum eu consequat at, dignissim vel lorem. Sed id nunc eget nulla scelerisque cursus ac ac nulla. 
      Quisque facilisis volutpat ultrices. Duis venenatis dignissim urna at porttitor. Sed velit nulla, rutrum in 
      ligula laoreet, porta egestas sapien. Nullam tristique, neque eget lacinia pulvinar, augue quam sodales nulla, 
      sed consectetur metus odio ut libero. Mauris porttitor urna nulla, sit amet volutpat libero posuere et.  </p>
  </div>
  </>
)

export default Header;