import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "../styles/Home.css";
import homeImage from "../assets/Hero.png";
import img1 from "../assets/Images/doc.png";
import img2 from "../assets/Images/documents.png";
import img3 from "../assets/Images/exe.png";
import img4 from "../assets/Images/pdf-file.png";
import {
  imageVariants,
  containerVariants,
  buttonVariants,
  textVariants,
} from "../AnimationVariants";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="home-content">
        <motion.h1 variants={textVariants} className="home-title">
          <span className="gradient-text">TransferX</span>
        </motion.h1>
        <motion.p variants={textVariants} className="home-subtitle">
          Secure, Fast, and Effortless File Transfers
        </motion.p>
        <motion.p variants={textVariants} className="home-description">
          TransferX is your go-to solution for seamless offline file sharing
          within local networks. With auto-connect and drag & drop, it's perfect
          for both personal and professional use.
        </motion.p>
        <div className="home-cta">
          <Link to="client-app" smooth={true} duration={500}>
            <motion.button
              variants={buttonVariants}
              className="button primary"
              name="Get_Started"
            >
              Get Started
            </motion.button>
          </Link>
          <Link to="features" smooth={true} duration={500}>
            <motion.button
              variants={buttonVariants}
              className="button secondary"
              name="Learn_More"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="home-image-container">
        <motion.img
          variants={imageVariants}
          src={homeImage}
          alt="Hero Image"
          className="home-image"
        />
        <div className="other-images">
          <motion.img variants={imageVariants} src={img1} alt="Document Icon" />
          <motion.img
            variants={imageVariants}
            src={img2}
            alt="Documents Icon"
          />
          <motion.img
            variants={imageVariants}
            src={img3}
            alt="Executable Icon"
          />
          <motion.img variants={imageVariants} src={img4} alt="PDF Icon" />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
