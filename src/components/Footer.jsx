import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} AbdulAhad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
