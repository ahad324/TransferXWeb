import React, { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { IoClose, IoMoon, IoSunny } from "react-icons/io5";
import { FaHome, FaCog, FaAppStore, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = ({ theme, handleThemeToggle, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine if the Apps link should be active
  const isAppsActive =
    activeSection === "#client-app" || activeSection === "#server-app";

  return (
    <header>
      <div className="header-content">
        <div className="logo">TransferX</div>
        <div className="menu-theme">
          <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <div className="inner_links_div">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className={activeSection === "#home" ? "active" : ""}
                  >
                    <FaHome /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="features"
                    smooth={true}
                    duration={500}
                    className={activeSection === "#features" ? "active" : ""}
                  >
                    <FaCog /> Features
                  </Link>
                </li>
              </div>
              <div className="inner_links_div">
                <li className={`apps-menu ${isAppsActive ? "active" : ""}`}>
                  <a>
                    <FaAppStore /> Apps
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link
                        to="client-app"
                        smooth={true}
                        duration={500}
                        className={
                          activeSection === "#client-app" ? "active" : ""
                        }
                      >
                        Client App
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="server-app"
                        smooth={true}
                        duration={500}
                        className={
                          activeSection === "#server-app" ? "active" : ""
                        }
                      >
                        Server App
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className={activeSection === "#about" ? "active" : ""}
                  >
                    <FaInfoCircle /> About
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={handleThemeToggle}>
            {theme === "light" ? <IoMoon /> : <IoSunny />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <LuLayoutGrid />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
