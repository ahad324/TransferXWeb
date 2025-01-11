import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import {
  containerVariants,
  buttonVariants,
  textVariants,
} from "../AnimationVariants";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";

import { SparklesCore } from "./ui/Sparkles";

import ShinyText from "./ui/ShinyText";

const Hero = () => {
  return (
    <div>
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="w-full h-full absolute"
      />
      <motion.section
        id="hero"
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {" "}
        <div className="hero-content">
          <motion.span
            variants={textVariants}
            className="inline-block bg-gray-800 text-xs uppercase tracking-wider py-1 px-3 rounded-full mb-4 "
          >
            <ShinyText text="Secure Offline File Transfers" speed={3} />
          </motion.span>
          <motion.h1 variants={textVariants} className="heading">
            Offline Exam Submissions Fast & Secure with{" "}
            <span className="hero_name">TransferX</span>
          </motion.h1>
          <motion.p variants={textVariants} className="hero-description">
            Streamline exam file submissions with secure, offline transfers.
            TransferX simplifies the collection process ensuring seamless, fast
            and tamper-proof submissions even without internet access.
          </motion.p>
          <div className="hero-cta">
            <Link to="/#downloadapps" smooth={"true"} duration={500}>
              <motion.button
                variants={buttonVariants}
                className="button primary"
                name="Download_TransferX"
              >
                <FiDownloadCloud size={25} />
                Download TransferX
              </motion.button>
            </Link>
            <Link to="/how-transferx-works">
              <motion.button
                variants={buttonVariants}
                className="button secondary"
                name="How_TransferX_Works"
              >
                <HiOutlineLightBulb size={25} /> How TransferX Works
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
