import React from "react";
import { motion } from "framer-motion";
import { containerVariants, textVariants } from "../AnimationVariants";
import SEO from "../components/SEO";
import { FiBookOpen, FiBriefcase, FiVideo, FiWifi } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import { Link } from "react-router-dom";

const Solutions = () => {
  const useCases = [
    {
      title: "Education & Exams",
      icon: <FiBookOpen size={40} className="text-[--primary-color]" />,
      desc: "Cheat-proof your exams. Collect files from 50+ students instantly without internet. The 'One-Click Collection' ensures no student is left behind.",
      highlight: "Perfect for: Computer Labs, Programming Contests"
    },
    {
      title: "Corporate Security",
      icon: <FiBriefcase size={40} className="text-[--primary-color]" />,
      desc: "Share sensitive internal documents without them ever touching the cloud. Air-gapped transfer ensures your data stays within the four walls of your office.",
      highlight: "Perfect for: Legal Firms, R&D Departments"
    },
    {
      title: "Creative Studios",
      icon: <FiVideo size={40} className="text-[--primary-color]" />,
      desc: "Move GigaBytes of raw footage or 3D assets in seconds. Saturate your local Gigabit bandwidth instead of waiting for cloud uploads.",
      highlight: "Perfect for: Video Editors, 3D Artists"
    },
    {
      title: "Events & Hackathons",
      icon: <FiWifi size={40} className="text-[--primary-color]" />,
      desc: "Zero-Setup Kiosk. Set up a submission server in seconds on any ad-hoc Wi-Fi. No heavy infrastructure or internet required.",
      highlight: "Perfect for: Hackathons, Workshops"
    }
  ];

  return (
    <motion.section
      className="min-h-screen py-20 px-4 md:px-8 text-[--text-color]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SEO
        title="TransferX Solutions | Universal Offline Data Collection"
        description="Discover how TransferX solves secure file transfer challenges for Education, Enterprise, and Creative Professionals without internet."
        keywords="exam file collection, secure corporate transfer, offline file sharing, lan transfer software"
        canonical="https://transferx.netlify.app/solutions"
        ogTitle="TransferX Solutions | Secure & Fast Offline Transfers"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={textVariants}>
          <h1 className="heading leading-tight mb-4">
            One Tool, <span className="hero_name">Infinite Possibilities</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            TransferX isn't just for exams. It's the universal standard for secure, high-speed, offline data collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={textVariants}
              className="p-8 rounded-2xl bg-[--card-bg] border border-[--border-color] hover:border-[--primary-color] transition-all duration-300 shadow-lg hover:shadow-[--primary-color]/20 group"
            >
              <div className="mb-6 p-4 rounded-full bg-[--bg-dark] w-fit group-hover:scale-110 transition-transform duration-300">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-lg mb-4 leading-relaxed opacity-90">{useCase.desc}</p>
              <div className="text-sm font-semibold text-[--primary-color] bg-[--primary-color]/10 py-2 px-4 rounded-full w-fit">
                {useCase.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-[--card-bg] p-10 rounded-3xl border border-[--border-color]"
          variants={textVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to secure your data flow?</h2>
          <p className="mb-8 text-lg">Deploy TransferX in your environment today. No configuration required.</p>
          <Link to="/#downloadapps" className="flex justify-center">
            <button className="button primary md:text-lg px-8 py-3 flex items-center justify-center gap-2">
              <LuRocket size={20} /> Get Started Now
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Solutions;
