import React from "react";
import { Link } from "react-scroll";
import "../styles/Home.css";
import homeImage from "/logo.ico";
import img1 from "../assets/Images/doc.png";
import img2 from "../assets/Images/documents.png";
import img3 from "../assets/Images/exe.png";
import img4 from "../assets/Images/pdf-file.png";

const Home = () => {
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
            <button className="cta-button primary" name="Get_Started">
              Get Started
            </button>
          </Link>
          <Link to="features" smooth={true} duration={500}>
            <button className="cta-button secondary" name="Learn_More">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="home-image-container">
        <img
          src={homeImage}
          alt="TransferX Logo"
          className="home-image"
          loading="lazy"
        />
        <div className="other-images">
          <img src={img1} alt="Document Icon" />
          <img src={img2} alt="Documents Icon" />
          <img src={img3} alt="Executable Icon" />
          <img src={img4} alt="PDF Icon" />
        </div>
      </div>
    </section>
  );
};

export default Home;
