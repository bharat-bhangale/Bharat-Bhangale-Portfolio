import React, { useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo (2).png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
    const menuref = useRef()

    const openMenu = () => {
        menuref.current.style.right = "0"
    }
    const closemenu = () => {
        menuref.current.style.right = "-350px"
    }
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuref} className="nav-menu">
                <img src={menu_close} onClick={closemenu} alt="" className="nav-mob-close" />
                <li> <AnchorLink className='anchor-link' href='#home'>Home</AnchorLink> </li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink> </li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink> </li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#work'>Projects</AnchorLink> </li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink> </li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar
