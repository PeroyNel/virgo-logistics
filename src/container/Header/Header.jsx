import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Anytime, Anywhere, Any Destination" />
      <h1 className="app__header-h1">Virgo Global Logistics</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We get your cargo delivered on time, anywhere in the world.<br></br> By Land, Air and Sea.</p>
      <button type="button" className="custom__button">Get A Quote</button>
    </div>

    <div className="app__wrapper_img1">
      <img src={images.transport} alt="header_img" />
    </div>
  </div>
);

export default Header;
