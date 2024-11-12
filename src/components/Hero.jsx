import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import { HeroImages } from "../Images";
import {
  imageVariants,
  containerVariants,
  buttonVariants,
  textVariants,
} from "../AnimationVariants";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <motion.h1 variants={textVariants} className="hero-title">
          <span className="gradient-text">TransferX</span>
        </motion.h1>
        <motion.p variants={textVariants} className="hero-subtitle">
          Secure, Fast, and Effortless File Transfers
        </motion.p>
        <motion.p variants={textVariants} className="hero-description">
          TransferX is your go-to solution for seamless offline file sharing
          within local networks. With auto-connect and drag & drop, it's perfect
          for both personal and professional use.
        </motion.p>
        <div className="hero-cta">
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
      <div className="hero-image-container">
        <motion.img
          variants={imageVariants}
          src={HeroImages[0]}
          alt="Hero Image"
          className="hero-image"
        />
        <div className="other-images">
          <motion.img
            variants={imageVariants}
            src={HeroImages[1]}
            alt="Document Icon"
          />
          <motion.img
            variants={imageVariants}
            src={HeroImages[2]}
            alt="Documents Icon"
          />
          <motion.img
            variants={imageVariants}
            src={HeroImages[3]}
            alt="Executable Icon"
          />
          <motion.img
            variants={imageVariants}
            src={HeroImages[4]}
            alt="PDF Icon"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
