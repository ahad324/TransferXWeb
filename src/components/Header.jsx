import React, { useState } from "react";
import { LuLayoutGrid, LuHome, LuHelpCircle, LuRocket, LuInfo, LuMail } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { Logo } from "../Images";
import { motion } from "framer-motion";
import { menuVariants } from "../AnimationVariants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.8
      }}
    >
      <div className="header-content">
        <div className="logo">
          <a
            href="/"
            className="flex justify-center items-center cursor-pointer"
          >
            <img
              src={Logo}
              alt="TransferX Logo"
              className="w-12  h-12 p-1 rounded-lg none md:block  "
            />
            <span>TransferX</span>
          </a>
        </div>
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
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.li custom={1} variants={menuVariants}>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <LuHome className="nav-icon" />
                <span>Home</span>
              </NavLink>
            </motion.li>
            <motion.li custom={2} variants={menuVariants}>
              <NavLink
                to="/how-transferx-works"
                onClick={toggleMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <LuHelpCircle className="nav-icon" />
                <span>How It Works</span>
              </NavLink>
            </motion.li>

            <motion.li custom={3} variants={menuVariants}>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <LuInfo className="nav-icon" />
                <span>About</span>
              </NavLink>
            </motion.li>
            <motion.li custom={4} variants={menuVariants}>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <LuMail className="nav-icon" />
                <span>Contact</span>
              </NavLink>
            </motion.li>
          </motion.ul>
        </nav>

        <button
          className="menu-toggle"
          name="Menu_toggler"
          onClick={toggleMenu}
          aria-label={
            toggleMenu ? "Close Navigation Menu" : "Open Navigation Menu"
          }
        >
          {isMenuOpen ? <IoClose /> : <LuLayoutGrid />}
        </button>
      </div>
    </motion.header >
  );
};

export default Header;
