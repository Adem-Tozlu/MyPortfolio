import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from './Theme/ThemeContext';
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {

    useEffect(() => {
       
        const resize = () => {
          if (window.innerWidth < 1023) {
            setMenu(true);
          } else {
            setMenu(false);
          }
        };
        window.addEventListener('resize', resize);
        resize();
      
        return () => {
          window.removeEventListener('resize', resize);
        };
      }, []);


      const [menu, setMenu] = useState(false)
      const { theme, toggleTheme } = useTheme(); 
      const  closeMenu = () => { setMenu(false) }
  return (
    <header className= {`theme-${theme}`}>
        <RxHamburgerMenu onClick={()=>setMenu(!menu)} className='header__hamburgerMenu'  />
{!menu?<nav className='header__nav'>
    <ul className='header__nav__ul-liste'>
        <li className='header__nav__li-liste'>
        <NavLink to="/" exact activeClassName="active">
            Home
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink to="/about" activeClassName="active">
            About
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink to="/skills" activeClassName="active">
            Skills
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink to="/projects" activeClassName="active">
            Projects
        </NavLink>
        </li>
        <li className='header__nav__li-liste'>
        <NavLink to="/contact" activeClassName="active">
            Contact
        </NavLink>
        </li>
    </ul>
</nav>:""}</header>


  )
}

export default Header