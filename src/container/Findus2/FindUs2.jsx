import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs2 = () => (
  <div className="app__bg4 app__wrapper section__padding">
    
    <div className="app__wrapper_img">
      <img src={images.map} alt="finus_img" />
    </div>
    <div className="app__wrapper_info">
      
      
      <div className="app__wrapper-content">
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem', color: '#000' }}>We Are <br></br>Connected Globally</h1>
        <p className="p__opensans">Our network of companies have the expertise to locate schedule flexibility and high frequency of sailings at competitive pricing. Due to our freight consolidation expertise and regular worldwide connections, we provide you with reliable performance and low supply chain cost. We handle your Ocean Freight with integrity and insight.</p>
        
        <p className="p__opensans"><br></br>Administrative and Customs procedures are handled with accuracy and extensive knowledge. Shipments are cleared and delivered without unnecessary delays. This service is backed by the expertise of our local office. Our network of companies include more than 1000 offices and covers all countries.</p>
        
        
      </div>
      
    </div>

    
  </div>
);

export default FindUs2;
