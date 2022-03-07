import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Office No 177, 1st Floor,<br></br> Willowbridge Centre, Carl Cronje Dr,<br></br> Tygervalley, Western Cape,<br></br> South Africa, 7530</p>
        <p className="p__opensans"><br></br>Phone:<br></br>+27 (0) 21 801 8685</p>
       
      </div>

      <div className="app__footer-links_logo">
        <img src={images.virgo} alt="footer_logo" />
        <p className="p__opensans"><br></br>&quot;Anytime, Anywhere, Any Destination.&quot;</p>
        <p><br></br></p>
        <div className="app__footer-links_icons">
        <br></br>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 AM - 17:00 PM</p>
        
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Virgo Global Logistics</p>
    </div>

  </div>
);

export default Footer;