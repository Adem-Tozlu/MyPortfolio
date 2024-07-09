import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "./Theme/ThemeContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import Resume from "/public/CV/Adem-Tozlu-CV.pdf";

function Header() {
  const [menuLinks, setMenuLinks] = useState(true);

  const [menu, setMenu] = useState(false);
  const { theme } = useTheme();
  const [nav, setNav] = useState(true);
  const navmenu = () => setMenu(!menu);
  const closeMenu = () => {
    setMenu(nav);
  };

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 1023) {
        setMenu(false);
        setMenuLinks(true);
        setNav(false);
      } else {
        setMenu(true);
        setMenuLinks(false);
        setNav(true);
      }
    };
    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <header className={`theme-${theme}`} id="homepage">
      <RxHamburgerMenu onClick={navmenu} className="header__hamburgerMenu" />
      {menu ? (
        <nav className="header__nav">
          <ul className="header__nav__ul-liste">
            <li className="header__nav__li-liste">
              <Link onClick={closeMenu} to="/" className="header__nav__text">
                Home
              </Link>
            </li>
            <li className="header__nav__li-liste">
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="header__nav__text"
              >
                About
              </Link>
            </li>
            <li className="header__nav__li-liste">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="header__nav__text"
              >
                Skills
              </Link>
            </li>
            <li className="header__nav__li-liste">
              <Link
                to="project"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="header__nav__text"
              >
                Projects
              </Link>
            </li>
            <li className="header__nav__li-liste">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="header__nav__text"
              >
                Contact
              </Link>
            </li>
          </ul>
          {menuLinks ? (
            <div className="header__nav__links">
              <a href="https://www.linkedin.com/in/adem-tozlu">
                <IoLogoLinkedin className="header__nav__links--button" />
              </a>

              <a
                href="https://github.com/Adem-Tozlu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="header__nav__links--button" />
              </a>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <TbFileCv className="header__nav__links--button" />
              </a>
              <a href="mailto:Adem-Tozlu@hotmail.de">
                {" "}
                <MdOutlineMail className="header__nav__links--button" />
              </a>
            </div>
          ) : (
            ""
          )}
        </nav>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
