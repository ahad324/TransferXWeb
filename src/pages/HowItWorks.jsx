import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { containerVariants, textVariants } from "../AnimationVariants";
import { Link } from "react-router-dom";
import { FiDownloadCloud } from "react-icons/fi";
import { Timeline } from "../components/ui/Timeline";

const HowItWorks = () => {
  const title = "How TransferX Works | Secure Offline File Transfers";
  const description =
    "Understand how TransferX simplifies offline file transfers for educational institutions. Explore its features and seamless integration process.";
  const keywords =
    "TransferX, offline file transfer, educational technology, secure file submission, client-server model, exam file management";

  const timelineData = [
    {
      title: "Installation Process",
      content: (
        <p>
          Download and install the TransferX server application on the
          examiner’s system and the client application on student devices. The
          installer ensures TransferX is securely placed in program files,
          preventing unauthorized tampering by students.
        </p>
      ),
    },
    {
      title: "Launch and Setup",
      content: (
        <p>
          Upon launching TransferX, the server listens for client connections.
          Client apps auto-discover the server using mDNS, ensuring seamless
          connectivity. Minimal configuration allows for fast and easy setup.
        </p>
      ),
    },
    {
      title: "Secure File Submission",
      content: (
        <p>
          Students submit files directly to the server, preventing any
          unauthorized sharing between peers. Real-time progress updates are
          displayed, ensuring transparency and reliability during exams.
        </p>
      ),
    },
    {
      title: "Auto-Updates",
      content: (
        <p>
          TransferX checks for updates automatically and installs them silently.
          This ensures the application remains up-to-date with the latest
          security patches and features without user intervention.
        </p>
      ),
    },
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto px-2 md:px-8 pt-10 text-[--text-color] leading-relaxed"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical="https://transferx.netlify.app/how-it-works"
        ogTitle="How TransferX Works | Secure Offline File Transfers"
      />

      <motion.h1
        className="text-center heading leading-tight gradient-text"
        variants={textVariants}
      >
        How TransferX Works
      </motion.h1>
      <motion.p className="text-center text-lg max-w-3xl mx-auto mb-4">
        TransferX revolutionizes offline file submissions through a secure
        client-server model, ensuring hassle-free file transfers during exams
        without relying on the internet.
      </motion.p>

      <Timeline data={timelineData} />

      <motion.div className="text-center flex justify-center items-center my-20">
        <Link to="/#downloadapps">
          <motion.button variants={textVariants} className="button primary">
            <FiDownloadCloud size={25} /> Download TransferX
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;
