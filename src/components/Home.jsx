import React from "react";
import { Link } from "react-scroll";
import "../styles/home.css";
import homeImage from "/logo.ico";

const home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-title">
          <span className="gradient-text">TransferX</span>
        </h1>
        <p className="home-subtitle">
          Secure, Fast, and Effortless File Transfers
        </p>
        <p className="home-description">
          TransferX is your go-to solution for seamless offline file sharing
          within local networks. With auto-connect and drag & drop, it's perfect
          for both personal and professional use.
        </p>
        <div className="home-cta">
          <Link to="client-app" smooth={true} duration={500}>
            <button className="cta-button primary">Get Started</button>
          </Link>
          <Link to="features" smooth={true} duration={500}>
            <button className="cta-button secondary">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="home-image-container">
        <img
          src={homeImage}
          alt="TransferX in action"
          className="home-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default home;
