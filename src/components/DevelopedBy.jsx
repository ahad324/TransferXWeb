import React from "react";
import "../styles/DevelopedBy.css";
import { myImage } from "../Images";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  textVariants,
  imageVariants,
  buttonVariants,
} from "../AnimationVariants";

const DevelopedBy = () => {
  const handleViewProjects = () => {
    window.open("https://ahad324.github.io/AllProjects/", "_blank");
  };

  const handleGitHubProfile = () => {
    window.open("https://github.com/ahad324", "_blank");
  };

  return (
    <section id="developed-by" className="about-section">
      <div className="container">

        <div className="profile-card-glass">
          <motion.div
            className="profile-header"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="avatar-container">
              <img src={myImage} alt="AbdulAhad" className="profile-avatar" />
              <div className="avatar-ring"></div>
            </div>

            <h2 className="dev-name">Developed by <span className="highlight-name">AbdulAhad</span></h2>
            <p className="dev-title">Full Stack Developer & Performance Engineer</p>
          </motion.div>

          <motion.div
            className="profile-body"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mission-text">
              "I build software that respects your hardware. My mission is to simplify technology
              with innovative tools that boost productivity, prioritizing raw performance and user experience."
            </p>

            <div className="button-group-center">
              <motion.button
                variants={buttonVariants}
                className="button primary"
                onClick={handleViewProjects}
              >
                <FaExternalLinkAlt size={18} className="mr-2"/> My Projects
              </motion.button>

              <motion.button
                variants={buttonVariants}
                className="button secondary github-btn"
                onClick={handleGitHubProfile}
              >
                <FaGithub size={20} className="mr-2" /> GitHub
              </motion.button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DevelopedBy;
