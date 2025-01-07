import React from "react";
import { useParams } from "react-router-dom";
import SEO from "@components/SEO";
import VideoPlayer from "@components/VideoPlayer";
import { motion } from "framer-motion";
import { containerVariants } from "../AnimationVariants";

// Mapping of app names to video links
const videoLinks = {
  client: "https://www.youtube.com/embed/Hk2IUU5uBaY?si=H3xeWMR1OO3vWhYb",
  server: "https://www.youtube.com/embed/videoId2",
};
const TutorialPage = () => {
  const { AppName } = useParams();
  const appNameTitleCase = AppName.charAt(0).toUpperCase() + AppName.slice(1);
  const title = `TransferX | ${appNameTitleCase} App Tutorial`;
  const description = `Learn how to use the ${appNameTitleCase} app with this step-by-step video tutorial.`;
  const keywords = `${AppName} tutorial, how to use ${AppName}, ${AppName} guide`;
  const canonical = `https://transferx.netlify.app/tutorial/${AppName}`;
  const ogtitle = `How to Use TransferX ${AppName} | Setup and Configuration Guide`;

  // Get the video link based on the app name
  const videoLink = videoLinks[AppName.toLowerCase()] || ""; // Default to empty if not found
  const errorMessage = "Video not available for this app."; // Error message

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-screen p-4 max-w-4xl mx-auto"
    >
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogtitle={ogtitle}
      />
      <h1 className="heading text-2xl font-bold mb-4">
        {appNameTitleCase} App Tutorial
      </h1>
      <VideoPlayer
        videoLink={videoLink}
        errorMessage={errorMessage}
        title={`${appNameTitleCase} App Tutorial`}
      />
    </motion.div>
  );
};

export default TutorialPage;
