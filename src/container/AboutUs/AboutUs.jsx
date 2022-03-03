import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__aboutus-overlay flex__center">
      
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">By</h1>
        
        
      </div>

      <div className="app__aboutus-content_van flex__center">
        <img src={images.van} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Land</h1>
        
        
      </div>
    </div>
  </div>
);

export default AboutUs;