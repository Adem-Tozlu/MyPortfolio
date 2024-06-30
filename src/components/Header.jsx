import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from './Theme/ThemeContext';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function Header() {

    useEffect(() => {
       
        const resize = () => {
          if (window.innerWidth < 1023) {
            setMenu(true);
            setMenuLinks(true)
          } else {
            setMenu(false);
            setMenuLinks(false)
          }
        };
        window.addEventListener('resize', resize);
        resize();
      
        return () => {
          window.removeEventListener('resize', resize);
        };
      }, []);

const [menuLinks, setMenuLinks] = useState(true)
      const [menu, setMenu] = useState(false)
      const { theme } = useTheme(); 
      const  closeMenu = () => { setMenu(false) }
  return (
    <header className= {`theme-${theme}`}>
        <RxHamburgerMenu onClick={()=>setMenu(!menu)} className='header__hamburgerMenu'  />
{!menu?<nav className='header__nav'>
    <ul className='header__nav__ul-liste'>
        <li className='header__nav__li-liste'>
        <NavLink onClick={()=>setMenu(!menu)} to="/" exact activeClassName="active" className="header__nav__text">
            Home
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink onClick={()=>setMenu(!menu)} to="/about" activeClassName="active" className="header__nav__text" >
            About
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink onClick={()=>setMenu(!menu)} to="/skills" activeClassName="active" className="header__nav__text">
            Skills
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink onClick={()=>setMenu(!menu)} to="/projects" activeClassName="active" className="header__nav__text">
            Projects
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink onClick={()=>setMenu(!menu)} to="/contact" activeClassName="active" className="header__nav__text">
            Contact
        </NavLink>
        </li>
    </ul>
   { menuLinks? <div className='header__nav__links'>
    <IoLogoLinkedin className='header__nav__links--button' />
    <FaGithub className='header__nav__links--button' />
    <FaWhatsapp className='header__nav__links--button' />
    <MdOutlineMail className='header__nav__links--button' /></div> :""}
</nav>:""}</header>


  )
}

export default Header