import React, { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { IoClose, IoMoon, IoSunny } from "react-icons/io5";
import { FaHome, FaCog, FaAppStore, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = ({ theme, handleThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <a href="/">
            <pre>𝓣𝓻𝓪𝓷𝓼𝓯𝓮𝓻𝓧</pre>
          </a>
        </div>
        <div className="menu-theme">
          <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <div className="inner_links_div">
                <li>
                  <Link to="home" smooth={true} duration={500} offset={-75}>
                    <FaHome /> Home
                  </Link>
                </li>
                <li>
                  <Link to="features" smooth={true} duration={500}>
                    <FaCog /> Features
                  </Link>
                </li>
              </div>
              <div className="inner_links_div">
                <li className={`apps-menu`}>
                  <a>
                    <FaAppStore /> Apps
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="client-app" smooth={true} duration={500}>
                        Client App
                      </Link>
                    </li>
                    <li>
                      <Link to="server-app" smooth={true} duration={500}>
                        Server App
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    <FaInfoCircle /> About
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          <button
            className="theme-toggle"
            name="Theme_toggler"
            onClick={handleThemeToggle}
          >
            {theme === "light" ? <IoMoon /> : <IoSunny />}
          </button>
          <button
            className="menu-toggle"
            name="Menu_toggler"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoClose /> : <LuLayoutGrid />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
