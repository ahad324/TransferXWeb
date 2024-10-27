import React from "react";
import {
  FaRocket,
  FaLock,
  FaRegSmile,
  FaDesktop,
  FaServer,
  FaTabletAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { textVariants } from "../AnimationVariants";
import { HoverEffect } from "./ui/HoverEffect";
import "../styles/Features.css";

const Features = () => {
  const features = [
    {
      title: "Fast Transfer Speeds",
      description: "Transfer files at incredible speeds.",
      icon: <FaRocket />,
    },
    {
      title: "Secure Encryption",
      description: "Your files are protected with end-to-end encryption.",
      icon: <FaLock />,
    },
    {
      title: "Easy to Use",
      description: "Our intuitive interface makes file transfer a breeze.",
      icon: <FaRegSmile />,
    },
    {
      title: "Cross-Platform Support",
      description: "Available on Windows, Mac, and Linux.",
      icon: <FaDesktop />,
    },
    {
      title: "Real-Time Response",
      description: "Send files instantly to your server.",
      icon: <FaServer />,
    },
    {
      title: "User-Friendly Interface",
      description: "Designed for simplicity and efficiency.",
      icon: <FaTabletAlt />,
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
