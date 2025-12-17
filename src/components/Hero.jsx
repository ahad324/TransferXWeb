import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import {
  buttonVariants,
  textVariants,
} from "../AnimationVariants";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";

import { SparklesCore } from "./ui/Sparkles";
import ShinyText from "./ui/ShinyText";
import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="w-full h-full absolute"
      />
      <SectionWrapper
        id="hero"
        className="hero"
      >
        {" "}
        <div className="hero-content">
          <motion.span
            variants={textVariants}
            className="inline-block bg-gray-800 text-xs uppercase tracking-wider py-1 px-3 rounded-full mb-4 "
          >
            <ShinyText text="Secure Offline Data Collection" speed={3} />
          </motion.span>
          <motion.h1 variants={textVariants} className="heading">
            Instant Data Collection <br />
            Fast & Secure with <br />
            <span className="hero_name">TransferX</span>
          </motion.h1>
          <motion.p variants={textVariants} className="hero-description">
            The fastest way to collect files from multiple devices <br />
            without internet. Zero-config setup for exams, <br />
            creative studios, and secure facilities.
          </motion.p>
          <div className="hero-cta">
            <Link to="/download">
              <Button
                variants={buttonVariants}
                name="Download_TransferX"
              >
                <FiDownloadCloud size={25} />
                Start Collecting
              </Button>
            </Link>
            <Link to="/how-transferx-works">
              <Button
                variant="secondary"
                variants={buttonVariants}
                name="How_TransferX_Works"
              >
                <HiOutlineLightBulb size={25} /> How TransferX Works
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;

