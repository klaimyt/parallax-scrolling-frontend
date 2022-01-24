import React from 'react';
import Navbar from '../navbar/Navbar'

import './header.css'

const Header = () => {
  return <div className="header"> 
    <div className="header-logo">klaimyt</div>
    <Navbar />
  </div>;
};

export default Header;
