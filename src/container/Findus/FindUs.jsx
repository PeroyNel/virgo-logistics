import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg3 app__wrapper section__padding" id="about">
    <div className="app__wrapper_info">
      <SubHeading title="About Us" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem', color: '#000' }}>Welcome to <br></br>Virgo Global Logistics</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Our global network of leading independently owned and operated companies work together in an environment which benefit from the “Power of One” philosophy.</p>
        
        <p className="p__opensans"><br></br>Combined with our Ocean Freight and Road Transport Services, we offer our valuable customers door to door air freight service anywhere in the world. This comprehensive service is backed by the expertise of our local office, who apply insight to local conditions that may reduce risk and delay.</p>
        <p className="p__opensans"><br></br>The advantage of our product is that we are available 24/7 and we are able to secure capacity when needed. Our knowledge of Customs procedures and requirements allows us to handle administrative matters swiftly. All consignments are pre Customs cleared enabling us to deliver your freight without delays.</p>
        
      </div>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.aboutusmaster} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
