import React, { useState, useRef } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";

const Services = () => {
  const services = [
    {
      text: "design",
      paragraph:
        "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
      image: '/images/design-service.webp',
    },
    {
      text: "project",
      paragraph:
        "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
      image: '/images/project-service.webp',
    },
    {
      text: "execution",
      paragraph:
        "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
      image: '/images/execution-service.webp',
    },
  ];

  const [selected, setSelected] = useState(0);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const scrollContainerRef = useRef(null);

  function activeService(index) {
    setSelected(index);
  }

  useGSAP(() => {

    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 0, // Adjust this multiplier to control the overall scroll speed
    });

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );


    return () => scroll.destroy();
  }, { scope: '.services-container', dependencies: [selected] });

  return (
    <>
      {services.length > 0 && (
        <section
          className="services-container my-20 mx-10 overflow-hidden sm:max-w-[1270px] xl:mx-auto"
          data-scroll-container
          ref={scrollContainerRef}
        >
          <div className="wrapper grid grid-cols-1 md:grid-cols-2 bg-black rounded-2xl ">
            <section className="px-8 py-10 md:p-10 lg:p-20 rounded-2xl text-customWhite flex flex-col gap-5 items-center justify-center">
              <div className="capitalize">
                {services.map((service, index) => (
                  <h2
                    key={service.text}
                    className={`text-5xl lg:text-7xl pl-3 border-l-2 md:border-l-4 cursor-pointer transition-all ${selected === index
                      ? "text-customWhite border-customOrangeRed"
                      : "text-customGray/50 border-customGray/50"
                      }`}
                    onClick={() => activeService(index)}
                  >
                    {service.text}
                  </h2>
                ))}
              </div>
              <p
                ref={paragraphRef}
                className="services-paragraph font-light max-w-[340px] md:max-w-[340px] lg:max-w-[400px] text-[0.9rem] md:text-base lg:text-lg"
              >
                {services[selected].paragraph}
              </p>
            </section>
            <section className="image-container">
              <img
                ref={imageRef}
                src={services[selected].image}
                alt={services[selected].text}
                className="w-full h-full rounded-2xl object-cover object-right"
                data-scroll
                data-scroll-speed="0.04" // Adjust this value for faster or slower scroll speed
              />
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default Services;
