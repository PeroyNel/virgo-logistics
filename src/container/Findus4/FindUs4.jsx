import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs4 = () => (
  <div className="app__bg3 app__wrapper section__padding" id="about">
    <div className="app__wrapper_img">
      <img src={images.philosophy} alt="finus_img" />
    </div>
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem', color: '#000' }}>Our Philosophy</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">The team at Virgo Global Logistics (Pty) Ltd aim to provide unequivocal customer service, with core values that include integrity and honesty.</p>
        
        <p className="p__opensans"><br></br>Our global network of partners covers almost every country and includes more than 1000 offices worldwide. This combined global strength and regional expertise enables our team to pursue and surpass the critical success factors of customer service, and are aligned with cost effective and profit related processes.</p>
        
        
      </div>
      
    </div>

    
  </div>
);

export default FindUs4;
