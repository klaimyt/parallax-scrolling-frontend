import React from 'react';

import "./navbar.css"

const Navbar = () => {
  return <div className='navbar'>
    <a href="#home" className="selected">Home</a>
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </div>;
};

export default Navbar;
