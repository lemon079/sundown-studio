import React, { useRef, useLayoutEffect } from "react";
import Blob from "../ui/Blob";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  // Create refs for each animated blob
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  // (Optional) A ref for the hero container if needed for scope
  const heroContainerRef = useRef(null);

  useGSAP(
    () => {
      // Animate headings (still using class selectors)
      gsap.from(".heading--animate", {
        opacity: 0,
        y: "100%",
        ease: "power3.inOut",
        duration: 1,
      });

      // Animate blob1 using its ref
      gsap.to(blob1Ref.current, {
        y: "65%",
        duration: 1.5,
        repeat: -1,
        delay: 1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Animate blob2 using its ref
      gsap.to(blob2Ref.current, {
        y: "38vh",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Animate blob3 using its ref
      gsap.to(blob3Ref.current, {
        y: "100%",
        x: "-20%",
        duration: 1.5,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: heroContainerRef.current }
  );

  const heroText = ["spaces", "that", "inspire"];

  return (
    <section className="hero-container" ref={heroContainerRef}>
      <div className="wrapper relative gap-10 mt-16 sm:mt-36 font-medium mx-5 sm:mx-10 pb-10 grid grid-cols-1 md:grid-cols-2 justify-between items-end border-b-2 border-borderColor">
        <div className="absolute right-0 z-[1]">
          <Blob
            customClass="static_blob_1"
            WidthHeight="w-[70vw] sm:w-[50vw] h-[55vh]"
            position="bottom-0 right-0"
            transform="translate-x-[10%] translate-y-[80%]"
          />
          <Blob
            ref={blob1Ref}
            customClass="moving_blob_1"
            WidthHeight="w-[60vw] sm:w-[35vw] h-[400px]"
            position="bottom-0 right-0"
            transform="translate-x-[20vw] translate-y-[70%]"
          />
          <Blob
            ref={blob2Ref}
            customClass="moving_blob_2"
            WidthHeight="w-[25vw] h-[340px]"
            position="bottom-0 right-0"
            transform="translate-x-[-50%] translate-y-[45vh] rotate-[-110deg]"
          />
          <Blob
            ref={blob3Ref}
            customClass="moving_blob_3"
            WidthHeight="w-[29vw] h-[46vh]"
            position="bottom-0 right-0"
            transform="translate-x-[-50%] translate-y-[100%] rotate-[-130deg]"
          />
        </div>
        <div className="overflow-hidden side-1 text-xl sm:text-3xl order-2 max-w-[350px] sm:max-w-[460px]">
          <p className="paragraph--animate">
            Sundown is a multi-disciplinary studio focused on creating unique,
            end-to-end experiences and environments.
          </p>
        </div>
        <div className="side-2 order-1 md:order-2 text-right">
          {heroText.map((text) => (
            <h1
              key={text}
              className="overflow-hidden uppercase text-[4.5rem] leading-[5rem] md:text-8xl lg:text-[11vw] lg:leading-[9vw]"
            >
              <div className="heading--animate">{text}</div>
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
