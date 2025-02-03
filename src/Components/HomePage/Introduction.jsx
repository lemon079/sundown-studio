import React, { useRef, useEffect } from "react";
import Blob from "../ui/Blob";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../ui/SplitText";

const Introduction = () => {
  const heading = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      // Blob animation
      gsap.from(".moving_blob", {
        y: "30%",
        x: "60%",
        // transform: 'scale3d(0.85,0.95,1) rotate(-50deg)',
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "power1",
      });

      // image and its text below it animation
      gsap.from(".paragraph--animate", {
        opacity: 0,
        y: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top center",
        },
      });

      gsap.from(".image--animate", {
        opacity: 0,
        x: "100%",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".side-2",
          start: "top center",
          end: "top center",
        },
      });
    },
    { scope: ".introduction-container" }
  );

  return (
    <section className="introduction-container max-w-[1345px] mx-auto my-20 sm:my-40">
      <div className="wrapper relative z-0 px-5 sm:px-16 md:px-16 flex flex-col md:flex-row gap-16">
        <Blob
          transform="translate-x-[70%] translate-y-[10%]"
          position="absolute top-0 left-[-40%] sm:left-0 z-[-1]"
          customClass="moving_blob"
        />
        <div className="overflow-hidden">
          <h2
            ref={heading}
            className="side-1 paragraph--animate text-4xl md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:pl-10"
          >
            <SplitText
              text="We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference."
              delay={8}
              animationFrom={{ opacity: 0, transform: "translate3d(0,100px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeInOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </h2>
        </div>

        <div className="side-2 w-[70%] md:w-full sm:max-w-[300px] md:max-w-full">
          <figure className="image--animate mt-0 md:mt-32 lg:mt-40">
            <img
              src="/images/Introduction.webp"
              alt="tick"
              className="rounded-xl"
              loading="lazy"
            />
            <figcaption className="font-light mt-10">
              We love to create, we love to solve, we love to collaborate, and
              we love to turn amazing ideas into reality. We’re here to partner
              with you through every step of the process and know that
              relationships are the most important things we build.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
