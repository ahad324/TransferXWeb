import React from "react";

const VideoPlayer = ({ videoLink, errorMessage, title }) => {
  return (
    <div className="relative overflow-hidden pt-[56.25%] w-full">
      {videoLink && (
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
