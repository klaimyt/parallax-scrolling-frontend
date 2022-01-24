import React, { useEffect, useRef } from 'react';

import { moon, mountainsFront, mountaisBehind, stars } from './imports'

import './main.css'

const Main = () => {
  const starsRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const mountaisBehindRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', animationHandler)
  }, [])

  const animationHandler = () => {
    const scrollPosition = window.scrollY
    if (starsRef &&
      starsRef &&
      moonRef &&
      mountaisBehindRef &&
      titleRef &&
      buttonRef) {
        
        starsRef.current!.style.left = `${+scrollPosition * 0.25}px`
        moonRef.current!.style.top = `${+scrollPosition * 1.05}px`
        mountaisBehindRef.current!.style.top = `${+scrollPosition * 0.35}px`
        titleRef.current!.style.marginRight = `${+scrollPosition * 4}px`
        titleRef.current!.style.marginTop = `${+scrollPosition * 1.5}px`
        buttonRef.current!.style.marginTop = `${+scrollPosition * 1.5}px`
    }}

  return (
    <div className="main">
      <img ref={starsRef} src={stars} alt="stars" />
      <img ref={moonRef} src={moon} id='moon' alt="moon" />
      <img ref={mountaisBehindRef} src={mountaisBehind} alt="rear mountains" />
      <h2 ref={titleRef} id="title">Moon Light</h2>
      <a ref={buttonRef} href="#home" className="main-btn">Explore</a>
      <img src={mountainsFront} id="front-mountains" alt="front mountains" />
    </div>)
    ;
};

export default Main;
