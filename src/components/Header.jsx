import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from './Theme/ThemeContext';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";


function Header() {
  const [menuLinks, setMenuLinks] = useState(true)

      const [menu, setMenu] = useState(false)
      const { theme } = useTheme(); 
      const [nav, setNav] = useState(true)
      const navmenu = () => setMenu(!menu);
      const  closeMenu = () => { setMenu(nav) }

    useEffect(() => {
       
        const resize = () => {
          if (window.innerWidth < 1023) {
            setMenu(false);
            setMenuLinks(true)
            setNav(false)

          } else {
            setMenu(true);
            setMenuLinks(false)
            setNav(true)
          }
        };
        window.addEventListener('resize', resize);
        resize();
      
        return () => {
          window.removeEventListener('resize', resize);
        };
      }, []);


  return (
    <header className= {`theme-${theme}`}>
        <RxHamburgerMenu onClick={navmenu} className='header__hamburgerMenu'  />
{menu? <nav className='header__nav' >
    <ul className='header__nav__ul-liste'>
        <li className='header__nav__li-liste'>
        <NavLink onClick={closeMenu } to="/"  className="header__nav__text">
            Home
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink onClick={closeMenu } to="/about"  className="header__nav__text" >
            About
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink onClick={closeMenu } to="/skills"  className="header__nav__text">
            Skills
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink onClick={closeMenu } to="/projects" className="header__nav__text">
            Projects
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink onClick={closeMenu } to="/contact" className="header__nav__text">
            Contact
        </NavLink>
        </li>
    </ul>
   { menuLinks? <div className='header__nav__links'>
    <IoLogoLinkedin className='header__nav__links--button' />
    <FaGithub className='header__nav__links--button' />
    <TbFileCv className='header__nav__links--button' />
    <MdOutlineMail className='header__nav__links--button' /></div> :""}
</nav>:""}</header>


  )
}

export default Header