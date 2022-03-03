import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs3 = () => (
  <div className="app__bg3 app__wrapper section__padding" id="about">
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem', color: '#000' }}>Our Story</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Established in 2004, Virgo Global Logistics (Pty) Ltd provides a comprehensive door to door service for all consignments to and from anywhere in the world, and throughout South Africa. We professionally process consignments, irrespective of weight or size, by air, sea or road.</p>
        
        <p className="p__opensans"><br></br>Our experience in the freight industry ensures that our customers enjoy the benefit of dealing with a well established and committed logistics company. Together with our global network of partners, an extensive knowledge of the industry, and a focused approach, we provide clients with a highly dependable international service network.</p>
        
        
      </div>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.establish} alt="finus_img" />
    </div>
  </div>
);

export default FindUs3;
