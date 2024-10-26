import React from "react";
import "../styles/About.css";
import profileImage from "../assets/me.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Profile" loading="lazy" />
          </div>
          <div className="about-description">
            <p className="intro">
              Hi, I'm <strong>AbdulAhad</strong>, a dedicated developer
              passionate about crafting efficient software solutions that
              prioritize user experience and performance.
            </p>
            <h3>My Mission</h3>
            <p>
              I aim to empower users by simplifying technology and providing
              innovative tools that boost productivity and creativity, all while
              embracing continuous learning.
            </p>
            <div className="button-group">
              <button
                className="button primary"
                name="View_my_project"
                onClick={handleViewProjects}
              >
                <FaExternalLinkAlt /> View My Projects
              </button>
              <button
                className="button github-button"
                name="Github_profile"
                onClick={handleGitHubProfile}
              >
                <FaGithub /> GitHub Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
