import React from 'react';

import { images } from '../../constants';
import './AboutUs3.css';

const AboutUs3 = () => (
  <div className="app__aboutus3 app__bg1 flex__center section__padding">
    <div className="app__aboutus3-overlay flex__center">
      
    </div>

    <div className="app__aboutus3-content flex__center">
      <div className="app__aboutus3-content_about">
        <h1 className="headtext__cormorant">By</h1>
        
      </div>

      <div className="app__aboutus3-content_knife flex__center">
        <img src={images.ship} alt="about_knife" />
      </div>

      <div className="app__aboutus3-content_history">
        <h1 className="headtext__cormorant">Sea</h1>
        
      </div>
    </div>
  </div>
);

export default AboutUs3;