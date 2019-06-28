import React from 'react';
import './index.scss';
import Golang from '../../assets/images/golang.png';


const Skills = () => (
  <div className="skills">
    <h2>Skills</h2>
    <div className="icons2">
      <i class="fab fa-react react"></i>
      <i class="fab fa-js js"></i>
      <i class="fab fa-html5 html5"></i>
      <i class="far fa-gem ruby"></i>
      <p className="sql">SQL</p>
      {/* <img src={Golang} className=''/> */}
    </div>
  </div>
)

export default Skills;