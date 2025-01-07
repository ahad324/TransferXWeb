import React from "react";
import { useParams } from "react-router-dom";
import SEO from "@components/SEO";

const TutorialPage = () => {
  const { AppName } = useParams();
  const appNameTitleCase = AppName.charAt(0).toUpperCase() + AppName.slice(1);
  const title = `TransferX | ${appNameTitleCase} App Tutorial`;
  const description = `Learn how to use the ${appNameTitleCase} app with this step-by-step video tutorial.`;
  const keywords = `${AppName} tutorial, how to use ${AppName}, ${AppName} guide`;
  const canonical = `https://transferx.netlify.app/tutorial/${AppName}`;
  const ogtitle = `How to Use TransferX ${AppName} | Setup and Configuration Guide`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogtitle={ogtitle}
      />
      <h1 className="heading">
        {appNameTitleCase} App Tutorial
      </h1>
      <video
        controls
        className="w-full max-w-4xl border-4 border-[--primary-color] rounded-lg shadow-3xl"
      >
        <source src={`/videos/${AppName}-tutorial.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TutorialPage;
