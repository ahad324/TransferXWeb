import React, { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
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
    <header>
      <div className="header-content">
        <div className="logo">
          <a
            href="/"
            className="flex justify-center items-center cursor-pointer"
          >
            <img
              src={Logo}
              alt="TransferX Logo"
              className="w-12  h-12 p-1 rounded-lg none md:block"
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
                Home
              </NavLink>
            </motion.li>
            <motion.li custom={2} variants={menuVariants}>
              <NavLink
                to="/how-transferx-works"
                onClick={toggleMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                How It Works
              </NavLink>
            </motion.li>

            <motion.li custom={3} variants={menuVariants}>
              <NavLink
                to="/solutions"
                onClick={toggleMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Solutions
              </NavLink>
            </motion.li>

            <motion.li custom={3} variants={menuVariants}>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                About
              </NavLink>
            </motion.li>
            <motion.li custom={4} variants={menuVariants}>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Contact
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
    </header>
  );
};

export default Header;
