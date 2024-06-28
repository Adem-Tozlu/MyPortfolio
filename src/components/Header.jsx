import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from './Theme/ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme(); 
  return (
    <header className={`theme-${theme}`}>
<nav>
    <ul>
        <li>
        <NavLink to="/" exact activeClassName="active">
            Home
        </NavLink>
        </li>
        <li>
        <NavLink to="/about" activeClassName="active">
            About
        </NavLink>
        </li>
        <li>
        <NavLink to="/projects" activeClassName="active">
            Projects
        </NavLink>
        </li>
        <li>
        <NavLink to="/contact" activeClassName="active">
            Contact
        </NavLink>
        </li>
    </ul>
</nav></header>


  )
}

export default Header