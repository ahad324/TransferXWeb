import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoWindows } from "react-icons/io5";
import { ImageSwiper } from "../components/ui/ImageSwipper";
import PasswordModal from "./PasswordModal";
import { motion } from "framer-motion";
import {
  textVariants,
  buttonVariants,
  containerVariants,
  imageVariants,
} from "../AnimationVariants";
import "../styles/AppSection.css";

const AppSection = ({ type, downloadLink, features, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    window.open(downloadLink, "_blank");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id={`${type}-app`} className={`app-section ${type}`}>
      <div className="container">
        <div className="app-content">
          <div className="app-info">
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} App
            </motion.h2>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="app-description"
            >
              Download the {type} app to start{" "}
              {type == "client" ? "transferring" : "receiving"} files today.
            </motion.p>
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="button primary download"
              onClick={handleOpenModal}
            >
              <IoLogoWindows size={20} /> Download for Windows
            </motion.button>
            {type === "client" && (
              <Link
                to={`/tutorial/${type}`}
                className="underline underline-offset-2 text-[--success-color] font-semibold"
              >
                Watch Tutorial
              </Link>
            )}
            <div className="feature-list">
              <motion.h3
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                Key Features:
              </motion.h3>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {features.map((feature, index) => (
                  <motion.li
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    key={index}
                    className="feature-item"
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <PasswordModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSubmit={handleDownload}
              passwordPrompt={`Enter password to download ${
                type.charAt(0).toUpperCase() + type.slice(1)
              } App`}
            />
          </div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="app-images"
          >
            <ImageSwiper images={images} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
