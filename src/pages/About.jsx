import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { containerVariants } from "../AnimationVariants";
import { Link } from "react-router-dom";

const About = () => {
  const title = "About TransferX | Secure Offline File Transfers for Education";
  const description =
    "Explore TransferX – the innovative offline file transfer solution that simplifies exam file submissions and ensures secure data management for educational institutions.";
  const keywords =
    "TransferX, offline file transfer, secure exam file submission, educational tech solutions, local network file transfer, exam automation, education innovation";
  const canonical = "https://transferx.netlify.app/about";
  const ogtitle =
    "About TransferX | Revolutionizing File Transfers in Education";

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 text-[--text-color] leading-relaxed"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogTitle={ogtitle}
      />
      <motion.h1 className="heading text-center leading-tight">
        Empowering Education Through Secure File Transfers
      </motion.h1>
      <motion.p className="mb-8 text-center text-lg">
        Welcome to TransferX – an innovative solution designed to transform file
        management in educational institutions. By simplifying offline file
        submissions, i'm making exam management efficient, secure, and
        stress-free.
      </motion.p>

      <motion.h2 className="text-3xl font-semibold mb-4">
        🚨 The Challenge
      </motion.h2>
      <motion.p className="mb-6">
        Many universities, particularly in Pakistan, face significant hurdles
        during computer-based exams. Submitting programming assignments or exams
        in labs can be inefficient and prone to errors. USB drives and shared
        folders are unreliable, and internet-based solutions are often
        impractical.
      </motion.p>

      <motion.h2 className="text-3xl font-semibold mb-4">
        ✅ TransferX – The Solution
      </motion.h2>
      <motion.p className="mb-6">
        TransferX streamlines file submissions through an offline, client-server
        model. This innovative tool ensures seamless file transfers without the
        need for internet connectivity, boosting security and efficiency in exam
        environments.
      </motion.p>

      <motion.h3 className="text-2xl font-semibold mb-4">
        🛠️ Key Features
      </motion.h3>
      <motion.ul className="list-disc pl-6 space-y-3 mb-8">
        <motion.li>
          <strong>Server-Client Architecture</strong> – Students submit files
          directly to a central server, eliminating peer-to-peer sharing.
        </motion.li>
        <motion.li>
          <strong>mDNS Protocol</strong> – Automatic detection of available
          servers, ensuring quick and hassle-free connections.
        </motion.li>
        <motion.li>
          <strong>Completely Offline</strong> – Operates without internet
          access, ensuring secure transfers and preventing online distractions.
        </motion.li>
      </motion.ul>

      <motion.h2 className="text-3xl font-semibold mb-4">
        🚀 Why TransferX Matters
      </motion.h2>
      <motion.p className="mb-4">
        <strong>Efficiency at Scale:</strong> Educational institutions can
        reduce administrative overhead during exams by automating file
        submissions.
      </motion.p>
      <motion.p className="mb-4">
        <strong>Versatility Beyond Exams:</strong> TransferX can facilitate file
        transfers in labs, offices, and other offline environments.
      </motion.p>
      <motion.p className="mb-8">
        <strong>Affordable and Scalable:</strong> Built with educational
        institutions in mind, TransferX is budget-friendly and easy to deploy.
      </motion.p>

      <motion.h2 className="text-3xl font-semibold mb-4">
        🤝 Let's Collaborate
      </motion.h2>
      <motion.p className="mb-6">
        I’m seeking partnerships with universities and institutions to implement
        TransferX into their academic workflows. If you’re interested in driving
        innovation in education, let's connect!{" "}
        <Link to="/contact" className="inline-block mt-4 button primary">
          Contact Me
        </Link>
      </motion.p>
    </motion.div>
  );
};

export default About;
