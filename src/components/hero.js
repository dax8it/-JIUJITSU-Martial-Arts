// src/components/Hero.js
import React from 'react';
import { Link } from "gatsby";
import { RiArrowRightSLine } from "react-icons/ri"
import { GatsbyImage } from "gatsby-plugin-image"

const Hero = ({ image, button1Text, button1Link, button2Text, button2Link }) => (
 <div className="hero" style={{ position: 'relative' }}>
   <GatsbyImage
     image={image}
     alt="Hero Image"
     className="hero-image"
     style={{ position: 'relative', width: '100%' }}
   />
  
   <div className="hero-button">
     {/* Add title and subtitle here */}
     <h1 className="hero-title">Best Adult and Kids Jiujitsu & Martial Arts Training in Jackson Heights, Queens</h1>
    <p className="hero-subtitle">Where can you find top-notch BJJ & Martial Arts training in Jackson Heights, Queens?</p>
    <p className="hero-title">@JujitsuNYC - Martial Arts</p>
    

     {button1Text && button1Link && (
       <Link to={button1Link} className="hero-button1">
         {button1Text} 
          <span className="icon -right"><RiArrowRightSLine /></span>
       </Link>
     )}
     {button2Text && button2Link && (
       <Link to={button2Link} className="hero-button2">
         {button2Text}
        <span className="icon -right"><RiArrowRightSLine /></span> 
       </Link>
     )}
   </div>
 </div>
);

export default Hero;
