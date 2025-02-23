import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./generalComponentStyle.css";

const Loading = () => {
  useGSAP(() => {
    const durationofChange = 0.6;
    gsap.to(".loading-text", {
      opacity: 1,
      stagger: durationofChange,
      y: "0%",
      ease: "expo.inOut",
      yoyo: true,
    });

    gsap.to(".loading-text", {
      y: "100%",
      opacity: 0,
      stagger: durationofChange,
      delay: durationofChange,
      ease: "expo.inOut",
      onComplete: () => {
        gsap.to(".loading-screen", {
          x: "-100%",
          duration: durationofChange,
          ease: "power4.inOut",
        });
      },
    });
  }, []);

  const loadText = ["content", "environment", "experiences"];

  return (
    <>
      <div className="loading-screen">
        <div className="relative w-full overflow-hidden h-[100px] ">
          {loadText.map((text) => (
            <div key={text} className="loading-text translate-y-full opacity-0">
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loading;
