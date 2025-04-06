import React, { useEffect, useRef, useState } from "react";
import { LuDot } from "react-icons/lu";
import Blob from "../Components/ui/Blob";
import "../index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../constants";

const Card = React.memo(({ project }) => {
  return (
    <a
      href=""
      className="card--animate relative overflow-hidden rounded-2xl odd:h-[400px] even:h-[300px]"
    >
      <div className="overlay"></div>
      {project.img && (
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="transition-all ease-linear hover:scale-[1.3] object-cover w-full h-full rounded-2xl"
        />
      )}
      {project.video && (
        <video
          src={project.video}
          loop
          muted
          autoPlay
          className="transition-all hover:scale-[1.1] object-cover w-full h-full rounded-2xl"
        ></video>
      )}
      <div className="absolute z-[2] bottom-0 left-[50%] translate-x-[-50%] pb-5 w-full text-center">
        <h5 className="text-customWhite text-xl font-bold capitalize">
          {project.title}
        </h5>
        <h6 className="text-customGray/80 uppercase text-sm flex items-center justify-center">
          {project.brand} <div className="size-1 bg-black" />
          <span>{project.type}</span>
        </h6>
      </div>
    </a>
  );
});

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const blobRef = useRef(null);

  const [selected, setSelected] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const filters = ["all", "experiential", "environment", "digital"];

  useGSAP(
    () => {
      const animationPower = "power3.inOut";
      const animationDuration = 1.2;

      if (blobRef.current) {
        gsap.to(blobRef.current, {
          y: "10%",
          x: "40%",
          transform: "scale3d(0.85,0.8,1) rotate(-20deg)",
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "power1",
        });
      }

      gsap.from(".simple--animate", {
        opacity: 0,
        y: "100%",
        ease: animationPower,
        duration: animationDuration,
      });
    },
    { scope: ".work-container" }
  );

  useGSAP(() => {
    const cardArray = gsap.utils.toArray(".card--animate");

    cardArray.forEach((singleCard) => {
      gsap.from(singleCard, {
        y: "50%",
        transform: "rotate3d(1.5, 1.4, 1.5, 45deg)",
        opacity: 0,
        scrollTrigger: {
          trigger: singleCard,
          start: "top 110%",
          end: "bottom 70%",
        },
      });
    });
  }, [selected]);

  function handleSelectedFilter(currentFilterID, filterType) {
    setSelected(currentFilterID);
    setFilteredProjects(
      projects.filter((project) =>
        filterType === "all" ? project : project.type === filterType
      )
    );
  }

  useEffect(() => {
    setFilteredProjects(projects); // Default on page load
  }, []);

  return (
    <section className="work-container relative py-40 max-w-[1350px] mx-auto">
      <Blob
        ref={blobRef}
        WidthHeight="w-[600px] h-[600px]"
        position="absolute top-[0%] left-[0%] z-[-1]"
        transform="translate-x-[30%] sm:translate-x-[50%] translate-y-[0%]"
      />

      <div className="ml-5 sm:ml-10">
        <div className="overflow-hidden">
          <h1 className="simple--animate uppercase text-8xl sm:text-[12rem]">
            work
          </h1>
        </div>

        {filters.length > 0 && (
          <nav>
            <ul className="simple--animate text-xs md:text-base rounded-full flex w-fit p-1 font-light border-2 border-borderColor bg-borderColor/80">
              {filters.map((filter, index) => (
                <li
                  key={filter}
                  onClick={() => handleSelectedFilter(index, filter)}
                >
                  <button
                    className={`capitalize py-2 px-3 rounded-full ${
                      selected === index && selected !== 0
                        ? "bg-black text-white"
                        : "bg-transparent"
                    }`}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {filteredProjects.length > 0 && (
        <section className="projects-container my-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center px-10 md:px-20 gap-x-10 sm:gap-x-20 gap-y-20 sm:gap-y-40">
          {filteredProjects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </section>
      )}
    </section>
  );
};

export default Work;
