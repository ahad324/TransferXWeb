"use client";
import React, { useState } from "react";
import { LuLayoutGrid, LuHome, LuHelpCircle, LuRocket, LuInfo, LuMail } from "react-icons/lu";
import { FiDownloadCloud } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import NavLink from "@components/ui/NavLink";
import "@styles/Header.css";
import { Logo } from "@src/Images";
import { motion } from "framer-motion";
import { menuVariants } from "@src/AnimationVariants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const pathname = usePathname();

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
            onMouseLeave={() => setHoveredPath(null)}
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
            <motion.li
              custom={1}
              variants={menuVariants}
              onMouseEnter={() => setHoveredPath("/")}
            >
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) => `relative ${isActive ? "active" : ""}`}
              >
                {(hoveredPath === "/" || (pathname === "/" && hoveredPath === null)) && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/10 rounded-[inherit] -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                <LuHome className="nav-icon relative z-20" />
                <span className="relative z-20">Home</span>
              </NavLink>
            </motion.li>
            <motion.li
              custom={2}
              variants={menuVariants}
              onMouseEnter={() => setHoveredPath("/download")}
            >
              <NavLink
                to="/download"
                onClick={toggleMenu}
                className={({ isActive }) => `relative ${isActive ? "active" : ""}`}
              >
                {(hoveredPath === "/download" || (pathname === "/download" && hoveredPath === null)) && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/10 rounded-[inherit] -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                <FiDownloadCloud className="nav-icon relative z-20" />
                <span className="relative z-20">Download</span>
              </NavLink>
            </motion.li>

            <motion.li
              custom={3}
              variants={menuVariants}
              onMouseEnter={() => setHoveredPath("/about")}
            >
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) => `relative ${isActive ? "active" : ""}`}
              >
                {(hoveredPath === "/about" || (pathname === "/about" && hoveredPath === null)) && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/10 rounded-[inherit] -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                <LuInfo className="nav-icon relative z-20" />
                <span className="relative z-20">About</span>
              </NavLink>
            </motion.li>
            <motion.li
              custom={4}
              variants={menuVariants}
              onMouseEnter={() => setHoveredPath("/contact")}
            >
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) => `relative ${isActive ? "active" : ""}`}
              >
                {(hoveredPath === "/contact" || (pathname === "/contact" && hoveredPath === null)) && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/10 rounded-[inherit] -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                <LuMail className="nav-icon relative z-20" />
                <span className="relative z-20">Contact</span>
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
