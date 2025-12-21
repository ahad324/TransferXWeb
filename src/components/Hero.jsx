"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import {
  buttonVariants,
  textVariants,
} from "@src/AnimationVariants";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";

import { SparklesCore } from "@components/ui/Sparkles";
import ShinyText from "@components/ui/ShinyText";
import SectionWrapper from "@components/ui/SectionWrapper";
import Button from "@components/ui/Button";

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
        className="hero min-h-fit"
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
            The fastest way to collect files from multiple devices <br className="hidden sm:block" />
            without internet. Zero-config setup for exams, <br className="hidden sm:block" />
            creative studios, and secure facilities.
          </motion.p>
          <div className="hero-cta">
            <Link href="/download">
              <Button
                variants={buttonVariants}
                name="Download_TransferX"
              >
                <FiDownloadCloud size={25} />
                Start Collecting
              </Button>
            </Link>
            <Link href="/how-transferx-works">
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

