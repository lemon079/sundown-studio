import React from "react";

const VideoSection = () => {
  return (
    <section className="video-container my-16 relative z-[20] px-5 sm:px-10">
      <video
        src="/videos/converse-soho.mp4"
        loop
        muted
        className="rounded-3xl object-cover h-[60vh] sm:h-screen w-screen"
      ></video>
    </section>
  );
};

export default VideoSection;
