import React from "react";
import "../styles/About.css";
import { myImage } from "../Images";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  textVariants,
  imageVariants,
  buttonVariants,
} from "../AnimationVariants";

const About = () => {
  const handleViewProjects = () => {
    window.open("https://ahad324.github.io/AllProjects/", "_blank");
  };

  const handleGitHubProfile = () => {
    window.open("https://github.com/ahad324", "_blank");
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="about-image"
          >
            <img src={myImage} alt="Profile of AbdulAhad" loading="lazy" />
          </motion.div>
          <div className="about-description">
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="intro"
            >
              Hi, I'm <strong>AbdulAhad</strong>, a dedicated developer
              passionate about crafting efficient software solutions that
              prioritize user experience and performance.
            </motion.p>
            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              My Mission
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              I aim to empower users by simplifying technology and providing
              innovative tools that boost productivity and creativity, all while
              embracing continuous learning.
            </motion.p>
            <div className="button-group">
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="button primary"
                name="View_my_project"
                onClick={handleViewProjects}
              >
                <FaExternalLinkAlt /> View My Projects
              </motion.button>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="button github-button"
                name="Github_profile"
                onClick={handleGitHubProfile}
              >
                <FaGithub /> GitHub Profile
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
