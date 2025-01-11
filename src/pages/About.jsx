import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { containerVariants } from "../AnimationVariants";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiAlertCircle,
  FiCheckCircle,
  FiServer,
  FiUsers,
} from "react-icons/fi";

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
      className="max-w-4xl min-h-screen flex justify-center items-center flex-col mx-auto px-6 py-12 text-[--text-color] leading-relaxed"
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
      <div className="w-full h-full">
        <h1 className="heading text-center leading-tight">
          Transforming Education with{" "}
          <span className="hero_name">TransferX</span>
        </h1>
        <p className="mb-8 text-center text-lg">
          Welcome to TransferX – an innovative solution designed to transform
          file management in educational institutions. By simplifying offline
          file submissions, i'm making exam management efficient, secure, and
          stress-free.
        </p>

        {/* The Challenge Section */}
        <div className="flex items-center gap-2 mb-4">
          <FiAlertCircle size={30} className="text-[--primary-color]" />
          <h2 className="text-3xl font-semibold">The Challenge</h2>
        </div>
        <p className="mb-6">
          Many universities, particularly in Pakistan, face significant hurdles
          during computer-based exams. Submitting programming assignments or
          exams in labs can be inefficient and prone to errors. USB drives and
          shared folders are unreliable, and internet-based solutions are often
          impractical.
        </p>

        {/* The Solution Section */}
        <div className="flex items-center gap-2 mb-4">
          <FiCheckCircle size={30} className="text-[--primary-color]" />
          <h2 className="text-3xl font-semibold">TransferX – The Solution</h2>
        </div>
        <p className="mb-6">
          TransferX streamlines file submissions through an offline,
          client-server model. This innovative tool ensures seamless file
          transfers without the need for internet connectivity, boosting
          security and efficiency in exam environments.
        </p>

        {/* Key Features Section */}
        <div className="flex items-center gap-2 mb-4">
          <FiServer size={30} className="text-[--primary-color]" />
          <h2 className="text-3xl font-semibold">Key Features</h2>
        </div>
        <ul className="list-disc pl-6 space-y-3 mb-8">
          <li>
            <strong>Server-Client Architecture</strong> – Students submit files
            directly to a central server, eliminating peer-to-peer sharing.
          </li>
          <li>
            <strong>mDNS Protocol</strong> – Automatic detection of available
            servers, ensuring quick and hassle-free connections.
          </li>
          <li>
            <strong>Completely Offline</strong> – Operates without internet
            access, ensuring secure transfers and preventing online
            distractions.
          </li>
        </ul>

        {/* Why TransferX Matters Section */}
        <div className="flex items-center gap-2 mb-4">
          <FiUsers size={30} className="text-[--primary-color]" />
          <h2 className="text-3xl font-semibold">Why TransferX Matters</h2>
        </div>
        <p className="mb-4">
          <strong>Efficiency at Scale:</strong> Educational institutions can
          reduce administrative overhead during exams by automating file
          submissions.
        </p>
        <p className="mb-4">
          <strong>Versatility Beyond Exams:</strong> TransferX can facilitate
          file transfers in labs, offices, and other offline environments.
        </p>
        <p className="mb-8">
          <strong>Affordable and Scalable:</strong> Built with educational
          institutions in mind, TransferX is budget-friendly and easy to deploy.
        </p>

        {/* Collaboration Section */}
        <div className="flex items-center gap-2 mb-4">
          <FiMail size={30} className="text-[--primary-color]" />
          <h2 className="text-3xl font-semibold">Let's Collaborate</h2>
        </div>
        <p className="mb-6">
          I’m seeking partnerships with universities and institutions to
          implement TransferX into their academic workflows. If you’re
          interested in driving innovation in education, let's connect!{" "}
        </p>
        <span className="flex items-center justify-center">
          <Link to="/contact" className="mt-4 button primary">
            <FiMail size={25} />
            Contact Me
          </Link>
        </span>
      </div>
    </motion.div>
  );
};

export default About;
