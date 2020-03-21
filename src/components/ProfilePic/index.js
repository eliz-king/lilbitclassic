import React from 'react';
import './index.scss';
import Picture from '../../assets/images/porfolio.jpg';

const ProfilePic = () => (
  <div className="pic">
    <img src={Picture} className='profile-pic'/>
  </div>
)

export default ProfilePic;
