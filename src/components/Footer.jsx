import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Images";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container border-t-2 md:border-t-4 border-[--border-color]  md:rounded-t-[100px]">
      <div className="footer-content max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-2 mb-4 group">
            <img src={Logo} alt="TransferX Logo" className="w-10 h-10 rounded-lg group-hover:scale-105 transition-transform" />
            <span className="text-xl font-bold tracking-tight">TransferX</span>
          </Link>
          <p className="text-sm opacity-70 mb-6 leading-relaxed">
            The ultimate offline-first file sharing solution. Secure, fast, and private transfers for your local network.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/ahad324" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            {/* Add more social icons if needed, keeping it minimal for now */}
          </div>
        </div>

        {/* Links - Product */}
        <div className="col-span-1 flex flex-col">
          <h3 className="footer-heading">Product</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/how-transferx-works">How It Works</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/#downloadapps">Download</Link></li>
          </ul>
        </div>

        {/* Links - Company/Legal */}
        <div className="col-span-1 flex flex-col">
          <h3 className="footer-heading">Company & Legal</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter / CTA (Optional, simplified to tagline for now) */}
        <div className="col-span-1 flex flex-col items-start md:items-end">
          <div className="bg-[--card-bg] p-4 rounded-xl border border-[--border-color] w-full text-center md:text-left">
            <h3 className="font-semibold mb-2 text-white">Stay Secure.</h3>
            <p className="text-sm opacity-80">
              TransferX encrypts your local transfers with mTLS 1.3. Your privacy is our code.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom max-w-7xl mx-auto px-6 mt-2 pt-2 pb-6 text-left">
        <p className="text-sm opacity-60">
          &copy; 2025 TransferX Pk. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
