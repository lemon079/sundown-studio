import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandPartners from "../Components/HomePage/BrandPartners";
import Blob from "../Components/ui/Blob";

const Studio = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const animationPower = "power3.inOut";
      const animationDuration = 1.2;

      gsap.from(".moving_blob", {
        y: "15%",
        x: "10%",
        transform: "scale3d(0.95,1,1.2) rotate(-50deg)",
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "power1",
      });

      // hero-container ===> (p) animation
      gsap.from(".hero-container h1 p", {
        opacity: 0,
        y: "100%",
        ease: "power3.inOut",
        duration: animationDuration,
      });

      // All CONTAINERS ===> (h2, paragraph and list) animation
      const allHeadings = gsap.utils.toArray(".containers .heading--animate");
      allHeadings.map((singleHeading) => {
        gsap.from(singleHeading, {
          opacity: 0,
          y: "100%",
          ease: animationPower,
          duration: animationDuration,
          scrollTrigger: {
            trigger: singleHeading,
            start: "top bottom",
            end: "top center",
          },
        });
      });

      const allParagraphs = gsap.utils.toArray(
        ".containers .paragraph--animate"
      );
      allParagraphs.map((singleParagraph) => {
        gsap.from(singleParagraph, {
          opacity: 0,
          y: "30%",
          ease: animationPower,
          duration: animationDuration,
          scrollTrigger: {
            trigger: singleParagraph,
          },
        });
      });

      const allListItems = gsap.utils.toArray(".containers .items--animate");
      allListItems.map((singleListItem) => {
        gsap.from(singleListItem, {
          opacity: 0,
          y: "100%",
          ease: animationPower,
          duration: animationDuration,
          scrollTrigger: {
            trigger: singleListItem,
            start: "top bottom",
            end: "top center",
          },
        });
      });
    },
    { scope: ".studio-container" }
  );

  const heroText = [
    { text: "turning", css: null },
    { text: "ideas into", css: "sm:pl-40 lg:pr-72 relative" },
    { text: "reality", css: "sm:pl-40 lg:pl-52 relative" },
  ];

  const sections = [
    {
      id: 1,
      heading: { name: "create", fontsize: 0 },
      text: "Crafting the concepts and experiences. Connecting the dots and amplifying the story.",
      list: [
        "Strategy & Ideation",
        "Concept Development",
        "Environmental Design",
        "Graphic Design",
        "Visual Merchandising",
        "3D Renderings",
        "Consumer Experience",
      ],
    },
    {
      id: 2,
      heading: { name: "produce", fontsize: 5 },
      text: "Production, strategy, partnership, and materials. The end point is more than the sum of its parts.",
      list: [
        "Project Management",
        "Budget Ownership",
        "Technical Drawings",
        "Digital & Technology Integration",
        "Custom Fabrication",
        "Graphics Production",
        "Material Samples & Prototyping",
      ],
    },
    {
      id: 3,
      heading: { name: "implement", fontsize: 5 },
      text: "Onsite guidance, installation and oversight to take each project through to the finish line.",
      list: [
        "Onsite Project Management",
        "Installation Oversight",
        "Sustainability Consulting",
        "Site Survey/Permitting",
        "Onsite Logistics",
        "Photography & Videography",
      ],
    },
  ];

  return (
    <>
      <section className="studio-container bg-gradient-to-b from-customWhite from-10% via-customOrange via-50% to-orange-500 to-60%">
        <section className="hero-container mt-36 relative">
          <Blob
            WidthHeight="w-[500px] h-[500px]"
            position="top-0 left-0"
            transform="translate-x-[30%] translate-y-[5%]"
            customClass="moving_blob"
          />
          <h1 className="text-[15vw] sm:text-[11vw] leading-[15vw] sm:leading-[9vw] uppercase text-center tracking-tight">
            {heroText.map(({ text, css }) => (
              <div key={text} className={`overflow-hidden text-center ${css}`}>
                <p>{text}</p>
              </div>
            ))}
          </h1>
          <div className="mt-16 px-5 sm:px-10 md:px-20 flex sm:items-center flex-col sm:flex-row gap-14 lg:gap-32">
            <figure className="w-[280px] sm:w-full relative">
              <img
                src="/images/Studio/hero-image.webp"
                className="rounded-2xl object-cover w-full h-full"
                loading="lazy"
                alt="Studio hero"
              />
            </figure>
            <p className="relative text-2xl lg:text-4xl">
              We love creating experiences from idea to install, but are also
              comfortable jumping into a project at any point in the process,
              from Creative, to Design, to Project Management and
              Implementation.
            </p>
          </div>
        </section>
        <section className="containers mt-28 px-5 sm:px-10 md:px-16 space-y-20">
          {sections.length > 0 &&
            sections.map((section) => (
              <section
                key={section.id}
                className={`container-${section.id} space-y-10 lg:space-y-28 `}
              >
                <div className="overflow-hidden">
                  <h2
                    style={{ fontSize: `${20 - section.heading.fontsize}vw` }}
                    className="heading--animate uppercase leading-[17vw] text-center"
                  >
                    {section.heading.name}
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-0 max-w-[1145px] mx-auto">
                  <p className="paragraph--animate text-2xl sm:text-3xl lg:text-4xl lg:max-w-[430px] lg:mx-auto lg:col-span-2">
                    {section.text}
                  </p>
                  <ul className="capitalize text-lg font-light lg:col-start-4 col-span-full">
                    {section.list.map((item, index) => (
                      <li
                        key={item}
                        className="items--animate border-b-[1px] border-black/40 pb-5 mb-5 text-xs sm:text-sm w-[90%] mx-auto sm:w-full"
                      >
                        <span className="text-sm text-black/60 mr-10">
                          0{index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
        </section>

        <BrandPartners carousal_item_border_color="border-black/40" />
      </section>
    </>
  );
};

export default Studio;
