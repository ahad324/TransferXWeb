import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { containerVariants, textVariants } from "../AnimationVariants";
import { Link } from "react-router-dom";
import { FiDownloadCloud, FiShield, FiWifi, FiUpload } from "react-icons/fi";
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
      icon: <FiShield size={30} className="text-[--primary-color]" />,
      content: (
        <div>
          <p>
            Download and install the TransferX server application on the
            examiner’s system and the client application on student devices.
          </p>
          <p className="mt-4">
            <strong>⚠ Important Note:</strong> Currently, TransferX is not
            signed with an online digital signature. This may trigger a warning
            during installation. Please ignore the warning and proceed with
            installation.
          </p>
          <p className="mt-2">
            To bypass this, install our <strong>trusted certificate</strong>.
            You can download it{" "}
            <Link
              to="/certificate"
              className="underline text-[--secondary-color]"
            >
              here
            </Link>
            . It only takes 5 seconds, and this ensures smooth installation.
          </p>
          <p className="mt-4">
            Your trust and support help grow TransferX – built by a passionate
            developer with limited resources. Thank you for being part of this
            journey!
          </p>
        </div>
      ),
    },
    {
      title: "Launch and Setup",
      icon: <FiWifi size={30} className="text-[--primary-color]" />,
      content: (
        <div>
          <p>
            Ensure both the client and server applications are connected to the
            <strong> same network</strong>. This can be achieved through Wi-Fi,
            Ethernet, or even a mobile hotspot.
          </p>
          <p className="mt-4">
            <strong>Server Side:</strong> Launch the TransferX server app and
            click <strong>Start Server</strong>. If prompted by the firewall,
            click <strong>Allow</strong> to enable the server to accept
            connections.
          </p>
          <p className="mt-4">
            You can customize the server by navigating to the{" "}
            <strong>Settings</strong> tab and updating configurations.
          </p>
          <p className="mt-4">
            <strong>Client Side:</strong> Open the TransferX client app and
            click <strong>Connect to Server</strong>. The client will
            automatically discover available servers within the same network and
            connect to them.
          </p>
          <p className="mt-4">
            Connection status will be displayed in the{" "}
            <strong>bottom-left corner</strong> of the client application.
          </p>
        </div>
      ),
    },
    {
      title: "Secure File Submission",
      icon: <FiUpload size={30} className="text-[--primary-color]" />,
      content: (
        <div>
          <p>
            Once connected to the server, students can submit their files
            directly by entering their roll number.
          </p>
          <p className="mt-4">
            <strong>How it Works:</strong> The roll number you enter will
            automatically replace the file name. If multiple files are selected,
            they will be zipped and sent as one, ensuring consistent and
            organized submissions.
          </p>
          <p className="mt-4">
            Click <strong>Upload</strong>, and the files will transfer instantly
            to the server. Real-time progress ensures you stay updated
            throughout the submission process.
          </p>
        </div>
      ),
    },
    {
      title: "Auto-Updates",
      icon: <FiShield size={30} className="text-[--primary-color]" />,
      content: (
        <p>
          TransferX checks for updates periodically and installs them silently.
          This ensures that the software remains up-to-date with the latest
          security enhancements and features without requiring user interaction.
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

      <h1
        className="text-center heading leading-tight gradient-text"
        variants={textVariants}
      >
        How <span className="hero_name">TransferX </span>
        Works
      </h1>
      <p className="text-center text-lg max-w-3xl mx-auto mb-4">
        TransferX revolutionizes offline file submissions through a secure
        client-server model, ensuring hassle-free file transfers during exams
        without relying on the internet.
      </p>

      <Timeline data={timelineData} />

      <div className="text-center flex justify-center items-center my-20">
        <Link to="/#downloadapps">
          <button className="button primary">
            <FiDownloadCloud size={25} /> Download TransferX
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
