import React from "react";
import { motion } from "framer-motion";
import SEO from "@components/SEO";
import { Link } from "react-router-dom";
import { containerVariants } from "../AnimationVariants";
import { FiDownloadCloud, FiMail } from "react-icons/fi";
import VideoPlayer from "@components/VideoPlayer";

const CertificatePage = () => {
  const videoLink =
    "https://www.youtube.com/embed/DxqomQ74fss?si=PArJK5S3z3ETSW-i";
  const errorMessage = "Certificate tutorial is not available.";
  const certificateUrl = "/assets/TransferX_certificate.crt";
  const title = "Install TransferX Certificate | Secure Offline File Transfers";
  const description =
    "Learn how to install the TransferX certificate to bypass installation warnings. This ensures secure and trusted installation of the application.";
  const keywords =
    "TransferX certificate, digital certificate installation, bypass installation warning, secure installation, educational technology";

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
        canonical="https://transferx.netlify.app/certificate"
        ogTitle="Install TransferX Certificate | Secure Offline File Transfers"
      />
      <div className="w-full h-full">
        <h1 className="text-center heading leading-tight">
          Install the <span className="hero_name">TransferX</span> Certificate
        </h1>
        <p className="text-center text-lg mb-8">
          Secure the installation process by installing the TransferX
          certificate. This simple process ensures trust and eliminates any
          installation warnings.
        </p>

        <div className="text-center mb-12">
          <a
            href={certificateUrl}
            download
            className="button primary inline-flex items-center gap-2"
          >
            <FiDownloadCloud size={22} /> Download Certificate
          </a>
        </div>

        <section className="bg-[--primary-color] p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Why Install the Certificate?
          </h2>
          <p className="mb-4">
            TransferX is currently not signed with an online digital signature.
            This may result in a security warning during installation. By
            installing our trusted certificate, you can ensure a smooth and
            secure installation process.
          </p>
          <p>
            This step is essential to maintain the integrity and authenticity of
            the TransferX application.
          </p>
        </section>

        <section className="md:p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">
            How to Install the Certificate
          </h2>
          <p className="mb-4">
            Watch the video below for a step-by-step guide on how to install the
            TransferX certificate. The process takes less than 5 seconds.
          </p>

          <VideoPlayer
            videoLink={videoLink}
            errorMessage={errorMessage}
            title={"Certificate installation tutorial video"}
          />
        </section>

        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold mb-6">Need Assistance?</h2>
          <p className="mb-4">
            If you encounter any issues during the installation, feel free to
            contact me.
          </p>
          <span className="flex items-center justify-center">
            <Link to="/contact" className="mt-4 button primary">
              <FiMail size={25} />
              Contact Me
            </Link>
          </span>
        </section>
      </div>
    </motion.div>
  );
};

export default CertificatePage;
