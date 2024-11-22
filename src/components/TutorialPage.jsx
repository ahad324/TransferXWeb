import React from "react";
import { useParams } from "react-router-dom";

const TutorialPage = () => {
  const { AppName } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">
        {AppName.charAt(0).toUpperCase() + AppName.slice(1)} App Tutorial
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
