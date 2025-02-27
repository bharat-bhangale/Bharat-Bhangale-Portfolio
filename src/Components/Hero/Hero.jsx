import React from 'react'
import "./Hero.css"
import logo from "../../assets/logo (2).png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from "../../assets/Bharat's Resume.pdf"

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <img src={logo} alt="" width={"50%"} />
            <h1><span>I'm Bharat Bhangale</span>, Full-Stack Developer From India</h1>
            <p>I am Bharat Bhangale, a passionate Computer Engineering student with a strong
                foundation in web development technologies such as HTML, CSS, JavaScript, React.js,
                Node.js, Express.js, and MongoDB.
            </p>
            <div className="hero-action">
            <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect With Me</div></AnchorLink>
                <a href={Resume} className='anchor-link' offset={50} target='_blank'> <div className="hero-resume">Resume</div></a>
            </div>
        </div>
    )
}

export default Hero
