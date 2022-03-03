import React from 'react';

import { images } from '../../constants';
import './AboutUs2.css';

const AboutUs2 = () => (
  <div className="app__aboutus2 app__bg2 flex__center section__padding">
    <div className="app__aboutus2-overlay flex__center">
      
    </div>

    <div className="app__aboutus2-content flex__center">
      <div className="app__aboutus2-content_about">
        <h1 className="headtext__cormorant">By</h1>
        
      </div>

      <div className="app__aboutus2-content_plane flex__center">
        <img src={images.plane} alt="about_plane" />
      </div>

      <div className="app__aboutus2-content_history">
        <h1 className="headtext__cormorant">Air</h1>
        
        
      </div>
    </div>
  </div>
);

export default AboutUs2;