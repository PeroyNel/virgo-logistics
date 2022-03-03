import React from 'react';

import { AboutUs, AboutUs2, AboutUs3, Chef, FindUs, FindUs2, FindUs3, FindUs4, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <AboutUs2 />
    <AboutUs3 />
    
    <FindUs />
    <FindUs2 />
    <FindUs3 />
    <FindUs4 />
    <Footer />
  </div>
);

export default App;
