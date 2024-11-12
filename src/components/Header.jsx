import React, { useState, useEffect } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { IoClose, IoMoon, IoSunny } from "react-icons/io5";
import { FaHome, FaCog, FaAppStore, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/Header.css";
import Logo from "/logo.ico";
import { motion } from "framer-motion";
import { menuVariants } from "../AnimationVariants";

const Header = ({ theme, handleThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth >= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-75}
            className="flex justify-center items-center cursor-pointer"
          >
            <img
              src={Logo}
              alt="TransferX Logo"
              className="w-10 h-10 mr-2 bg-white p-1 rounded-lg none md:block"
            />
            <h2 className="hidden sm:block">TransferX</h2>
          </Link>
        </div>
        <div className="menu-theme">
          <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <motion.ul
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              whileInView={isLargeDevice ? "visible" : undefined}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="inner_links_div">
                <motion.li custom={1} variants={menuVariants}>
                  <a href="/">
                    <FaHome /> Home
                  </a>
                </motion.li>
                <motion.li custom={2} variants={menuVariants}>
                  <Link to="features" smooth={true} duration={500}>
                    <FaCog /> Features
                  </Link>
                </motion.li>
              </div>
              <div className="inner_links_div">
                <motion.li
                  custom={3}
                  variants={menuVariants}
                  className={`apps-menu`}
                >
                  <a>
                    <FaAppStore /> Apps
                  </a>
                  <ul className="sub-menu">
                    <motion.li custom={4} variants={menuVariants}>
                      <Link to="client-app" smooth={true} duration={500}>
                        Client App
                      </Link>
                    </motion.li>
                    <motion.li custom={5} variants={menuVariants}>
                      <Link to="server-app" smooth={true} duration={500}>
                        Server App
                      </Link>
                    </motion.li>
                  </ul>
                </motion.li>
                <motion.li custom={6} variants={menuVariants}>
                  <Link to="about" smooth={true} duration={500}>
                    <FaInfoCircle /> About
                  </Link>
                </motion.li>
              </div>
            </motion.ul>
          </nav>
          <button
            className="theme-toggle"
            name="Theme_toggler"
            aria-label="Toggle Theme"
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
