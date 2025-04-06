import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import Blob from "../Components/ui/Blob";
import "../index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [selected, setSelected] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const filter = ["all", "experiential", "environment", "digital"];
  const projects = [
    {
      title: "medialink CES",
      brand: "medialink",
      type: "digital",
      video: "/videos/marketing-reinvented.mp4",
      img: null,
    },
    {
      title: "converse SoHo",
      brand: "converse",
      type: "environment",
      video: "/videos/converse-soho.mp4",
      img: null,
    },
    {
      title: "run with nike",
      brand: "nike",
      type: "environment",
      img: "/images/work/run-with-nike.webp",
      video: null,
    },
    {
      title: "NYFW popup",
      brand: "afterpay",
      type: "experiential",
      video: "/videos/nyfw-popup.mp4",
      img: null,
    },
    {
      title: "play new kidsvision",
      brand: "nike",
      type: "experiential",
      video: "/videos/play-new-kidsvision.mp4",
      img: null,
    },
    {
      title: "air force 1 2022",
      brand: "nike",
      type: "environment",
      img: "/images/work/airforce-1-2022.webp",
      video: null,
    },
    {
      title: "carmelo anthony 7pm in brooklyn set",
      brand: "wave sports entertainment",
      type: "environment",
      video: "/videos/carmelo-anthony.mp4",
      img: null,
    },
    {
      title: "chicago marathon",
      brand: "nike",
      type: "environment",
      img: "/images/work/chicago-marathon-2022.webp",
      video: null,
    },
    {
      title: "WSE super bowl pregame party",
      brand: "wave sports entertainment",
      type: "experiential",
      video: "/videos/wse-super-bowl.mp4",
      img: null,
    },
    {
      title: "CES 2023",
      brand: "medialink",
      type: "experiential",
      img: "/images/work/ces-2023.webp",
      video: null,
    },
    {
      title: "never done",
      brand: "nike",
      type: "environment",
      img: "/images/work/never-done.webp",
      video: null,
    },
    {
      title: "olympics play new",
      brand: "nike",
      type: "environment",
      img: "/images/work/olympics-play-new.webp",
      video: null,
    },
    {
      title: "MLB all star LA",
      brand: "nike",
      type: "environment",
      img: "/images/work/mlb-all-star-la.webp",
      video: null,
    },
    {
      title: "hunter X nordstrom",
      brand: "hunter",
      type: "experiential",
      video: "/videos/hunter-x-nordstrom.mp4",
      img: null,
    },
    {
      title: "superrep",
      brand: "nike",
      type: "environment",
      img: "/images/work/superrep.webp",
      video: null,
    },
    {
      title: "made for play ",
      brand: "paterson",
      type: "digital",
      img: "/images/work/made-for-play.jpeg",
      video: null,
    },
  ];

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const animationPower = "power3.inOut";
      const animationDuration = 1.2;

      gsap.to(".moving_blob", {
        y: "10%",
        x: "40%",
        transform: "scale3d(0.85,0.8,1) rotate(-20deg)",
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "power1",
      });

      // hero-heading ===> ( heading and filterbox ) animation
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

    cardArray.map((singleCard) => {
      gsap.from(singleCard, {
        y: "50%",
        transform: "rotate3d(1.5, 1.4, 1.5, 45deg)",
        opacity: 0,
        scrollTrigger: {
          trigger: singleCard,
          start: "top 70%",
          end: "bottom 70%",
        },
      });
    });
  }, [selected]);

  function handleSelectedFilter(currentFilterID, filterType) {
    setSelected(currentFilterID);
    setFilteredProjects(
      projects.filter((project) =>
        filterType == "all" ? project : project.type == filterType && project
      )
    );
  }

  useEffect(() => {
    setFilteredProjects(projects); // for default when page is loaded first time
  }, []);

  return (
    <section className="work-container relative py-40 max-w-[1350px] mx-auto ">
      <Blob
        WidthHeight="w-[600px] h-[600px]"
        position="absolute top-[0%] left-[0%] z-[-1]"
        transform="translate-x-[30%] sm:translate-x-[50%] translate-y-[0%]"
        customClass="moving_blob"
      />
      <div className="ml-5 sm:ml-10">
        <div className="overflow-hidden">
          <h1 className="simple--animate uppercase text-8xl sm:text-[12rem]">
            work
          </h1>
        </div>
        {filter.length > 0 && (
          <nav>
            <ul className="simple--animate text-xs md:text-base rounded-full flex w-fit p-1 font-light border-2 border-borderColor bg-borderColor/80">
              {filter.map((filter, index) => (
                <li
                  key={filter}
                  onClick={() => handleSelectedFilter(index, filter)}
                >
                  <button
                    className={`capitalize py-2 px-3 rounded-full ${
                      selected == 0
                        ? "bg-transparent"
                        : selected == index && "bg-black text-white"
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
            <a
              href=""
              key={project.title}
              className="card--animate relative overflow-hidden rounded-2xl odd:h-[400px] even:h-[300px] "
            >
              <div className="overlay"></div>
              {project.img != null && (
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="transition-all ease-linear hover:scale-[1.3] object-cover w-full h-full rounded-2xl"
                />
              )}
              {project.video != null && (
                <video
                  controls
                  className="transition-all hover:scale-[1.1] object-cover w-full h-full rounded-2xl"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              )}
              <div className="absolute z-[2] bottom-0 left-[50%] translate-x-[-50%] pb-5 w-full text-center">
                <h5 className="text-customWhite text-xl font-bold capitalize">
                  {project.title}
                </h5>
                <h6 className="text-customGray/80 uppercase text-sm flex items-center justify-center">
                  {project.brand} <LuDot className="text-2xl" />{" "}
                  <span>{project.type}</span>
                </h6>
              </div>
            </a>
          ))}
        </section>
      )}
    </section>
  );
};

export default Work;
