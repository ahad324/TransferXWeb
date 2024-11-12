import React from "react";
import { motion } from "framer-motion";
import { textVariants } from "../AnimationVariants";
import { HoverEffect } from "./ui/HoverEffect";
import { FeaturesImages } from "../Images";
import "../styles/Features.css";

const Features = () => {
  const features = [
    {
      title: "Fast Transfer Speeds",
      description:
        "Experience the ability to transfer files at incredible speeds, ensuring your data is moved quickly and efficiently across network.",
      image: FeaturesImages[0],
    },
    {
      title: "Auto Connect",
      description:
        "Effortlessly discover and connect to servers on your local network, ensuring seamless integration and connectivity.",
      image: FeaturesImages[1],
    },
    {
      title: "Automatic Files Zipping",
      description:
        "Effortlessly compress your files for efficient transfer, reducing file size and optimizing bandwidth usage without manual effort.",
      image: FeaturesImages[2],
    },
    {
      title: "Automatic App Updates",
      description:
        "Easily receive the latest features and security enhancements, ensuring your app stays up-to-date with minimal effort.",
      image: FeaturesImages[3],
    },
    {
      title: "Real-Time Response",
      description:
        "Send files instantly to your server with real-time response capabilities, ensuring immediate data availability and access.",
      image: FeaturesImages[4],
    },
    {
      title: "User-Friendly Interface",
      description:
        "Designed for simplicity and efficiency, our interface allows users to navigate and operate with ease, enhancing user experience.",
      image: FeaturesImages[5],
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Features
        </motion.h2>
        <HoverEffect items={features} />
      </div>
    </section>
  );
};

export default Features;
