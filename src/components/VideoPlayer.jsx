import React, { useState } from "react";

const VideoPlayer = ({ videoLink, errorMessage, title }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden pt-[56.25%] w-full">
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}{" "}
      {/* Display the title */}
      {!isVideoLoaded && videoLink && (
        <img
          src={`https://img.youtube.com/vi/${
            videoLink.split("embed/")[1].split("?si")[0]
          }/hqdefault.jpg`} // Dynamic thumbnail
          alt={`Thumbnail for ${title}`}
          className="absolute top-0 left-0 w-full h-full rounded-lg cursor-pointer"
          onClick={() => setIsVideoLoaded(true)} // Load video on click
        />
      )}
      {isVideoLoaded && videoLink && (
        <iframe
          src={videoLink}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        ></iframe>
      )}
      {!videoLink && <p>{errorMessage}</p>} {/* Message if no video is found */}
    </div>
  );
};

export default VideoPlayer;
