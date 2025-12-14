import React from "react";
import SEO from "../components/SEO";
import { textVariants } from "../AnimationVariants";
import { Link } from "react-router-dom";
import { FiDownloadCloud, FiShield, FiWifi, FiUpload } from "react-icons/fi";
import { Timeline } from "../components/ui/Timeline";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";

const HowItWorks = () => {
  const title = "How TransferX Works | Secure Offline File Transfers";
  const description =
    "Understand how TransferX simplifies offline file transfers for educational institutions. Explore its features and seamless integration process.";
  const keywords =
    "TransferX, offline file transfer, exam software, client-server file sharing, mdns discovery, resumable upload, air-gapped transfer";

  const timelineData = [
    {
      title: "One-Click Installation",
      icon: <FiShield size={30} className="text-[--primary-color]" />,
      content: (
        <div>
          <p>
            Download the <strong>Server</strong> app for the teacher/manager, and the <strong>Client</strong> app for students or contributors.
          </p>
          <p className="mt-4">
            That's it. No database configuration, no complex IP routing, and no internet required. Just run the installer and you're ready.
          </p>
        </div>
      ),
    },
    {
      title: "Zero-Config Launch",
      icon: <FiWifi size={30} className="text-[--primary-color]" />,
      content: (
        <div>
          <p>
            <strong>Server Side:</strong> Click <strong>Start Server</strong>. We handle the firewall rules and network ports automatically.
          </p>
          <p className="mt-4">
            <strong>Client Side:</strong> Launch the app and click <strong>Connect</strong>.
          </p>
          <p className="mt-2">
            Thanks to our smart <strong>mDNS Discovery</strong>, the client finds the server instantly without typing a single IP address. It really is that simple.
          </p>
        </div>
      ),
    },
    {
      title: "Drag, Drop, Done",
      icon: <FiUpload size={30} className="text-[--primary-color]" />,
      content: (
        <div>
          <p>
            Students simply enter their ID or Name and <strong>Drag & Drop</strong> their exam files.
          </p>
          <p className="mt-4">
            <strong>Smart Engines:</strong> TransferX automatically zips their files, establishes a secure stream, and uploads it at maximum LAN speeds.
          </p>
          <p className="mt-2">
            If the Wi-Fi drops, the <strong>Smart Resume</strong> feature ensures the upload picks up exactly where it left off once reconnected.
          </p>
        </div>
      ),
    },
    {
      title: "Silent Auto-Updates",
      icon: <FiShield size={30} className="text-[--primary-color]" />,
      content: (
        <p>
          We keep your security tight. TransferX silently updates itself in the background when an internet connection is available, ensuring you always have the latest features and patches.
        </p>
      ),
    },
  ];

  return (
    <SectionWrapper
      className="max-w-5xl flex justify-center items-center flex-col mx-auto pt-10 leading-relaxed"
    >
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical="https://transferx.netlify.app/how-it-works"
        ogTitle="How TransferX Works | Secure Offline File Transfers"
      />
      <div className="w-full h-full">
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
            <Button>
              <FiDownloadCloud size={25} /> Download TransferX
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
