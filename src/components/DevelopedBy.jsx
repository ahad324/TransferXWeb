"use client";
import React from "react";
import "@styles/DevelopedBy.css";
import { myImage } from "@src/Images";
import { FaGithub, FaExternalLinkAlt, FaCode, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { textVariants } from "@src/AnimationVariants";

const DevelopedBy = () => {
  const handleViewProjects = () => window.open("https://ahad324.github.io/AllProjects/", "_blank");
  const handleGitHubProfile = () => window.open("https://github.com/ahad324", "_blank");
  const handleLinkedInProfile = () => window.open("https://www.linkedin.com/in/abdul-ahad-a08263273", "_blank");

  return (
    <section id="developed-by" className="about-section">
      <div className="container flex justify-center pt-24">

        <motion.div
          className="dev-card-wrapper"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="dev-card-3d group">

            {/* Avatar Section */}
            <div className="avatar-container">
              <div className="circle-bg"></div>
              <img src={myImage} alt="AbdulAhad" className="avatar-pop-img" />
              <div className="status-dot tooltip" data-tip="Online"></div>
            </div>

            {/* Content */}
            <div className="card-content pt-20 pb-8 px-6 text-center">
              <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] bg-[#1a1f2e] text-[#64ffda] uppercase mb-5 border border-[#64ffda]/20 shadow-lg">
                Creator
              </div>

              <h2 className="text-5xl font-bold tracking-tight text-white mb-2 font-display">
                AbdulAhad
              </h2>

              <p className="text-gray-400 text-base flex items-center justify-center gap-2 mb-8 font-medium">
                <FaCode className="text-[--primary-color]" /> Full Stack Developer
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button
                  onClick={handleViewProjects}
                  className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 text-sm"
                >
                  Projects <FaExternalLinkAlt size={12} />
                </button>

                <button
                  onClick={handleGitHubProfile}
                  className="p-3.5 rounded-xl bg-[#24292e]/80 text-white hover:bg-[#24292e] border border-gray-700/50 hover:border-gray-500 transition-all transform hover:-translate-y-1 shadow-lg backdrop-blur-md"
                  title="GitHub"
                >
                  <FaGithub size={20} />
                </button>

                <button
                  onClick={handleLinkedInProfile}
                  className="p-3.5 rounded-xl bg-[#0077b5]/80 text-white hover:bg-[#0077b5] border border-blue-400/30 hover:border-blue-300 transition-all transform hover:-translate-y-1 shadow-lg backdrop-blur-md"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DevelopedBy;
