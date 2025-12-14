import React from "react";
import { motion } from "framer-motion";
import { textVariants } from "../AnimationVariants";
import { HoverEffect } from "./ui/HoverEffect";
import { FeaturesImages } from "../Images";
import "../styles/Features.css";

const Features = () => {
  const features = [
    {
      title: "Smart Resume",
      description:
        "Network interrupted? No problem. TransferX automatically resumes uploads exactly where they left off, ensuring no data is ever lost.",
      image: FeaturesImages[0],
    },
    {
      title: "Zero-Config Auto Connect",
      description:
        "Forget IP addresses. Our mDNS discovery finds local servers instantly. Just launch and connect—it works like magic.",
      image: FeaturesImages[1],
    },
    {
      title: "On-the-Fly Zipping",
      description:
        "Drag a folder with 100 files, and TransferX zips them instantly before sending. Orderly, compressed, and efficient.",
      image: FeaturesImages[2],
    },
    {
      title: "Air-Gapped Privacy",
      description:
        "Your data never touches the cloud. 100% offline transfer means total privacy for exams, legal docs, and trade secrets.",
      image: FeaturesImages[3],
    },
    {
      title: "Live Transfer Dashboard",
      description:
        "Watch transfers in real-time. The server dashboard updates live, giving you total visibility over incoming data flow.",
      image: FeaturesImages[4],
    },
    {
      title: "Beautiful Dark Mode",
      description:
        "Built for focus. Toggle between a crisp Light Mode and a stunning, battery-saving Dark Mode with a single click.",
      image: FeaturesImages[5],
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="sparkle-tag text-sm font-semibold tracking-wider text-text uppercase bg-[var(--primary-color)]/10 px-3 py-1 rounded-full mb-4">
            Why TransferX?
          </span>
          <h2 className="heading text-4xl mb-4">
            Everything You Need <br />
            <span className="hero_name">Built-In</span>
          </h2>
          <p className="description text-gray-400 max-w-2xl mx-auto text-lg">
            No external dependencies. No internet required. Just pure, unmatched speed and reliability for your local network.
          </p>
        </motion.div>

        <HoverEffect items={features} />
      </div>
    </section>
  );
};

export default Features;
