import React, { useRef, useEffect, useState } from "react";

const LazyVideo = ({ src, poster, type = "video/mp4", ...rest }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Load once
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef}>
      {isVisible && (
        <video poster={poster} preload="none" {...rest}>
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LazyVideo;
