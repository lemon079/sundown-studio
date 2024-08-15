import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import Blob from "./GeneralComponents/Blob";
import "../index.css";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Work = () => {

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.to('.moving_blob', {
      y: '10%',
      x: '40%',
      transform: 'scale3d(0.85,0.8,1) rotate(-20deg)',
      duration: 8,
      yoyo: true,
      repeat: -1,
      ease: 'power1',
    })

  }, { scope: '.work-container' })


  const filter = ["all", "experiential", "environment", "digital"];

  const projects = [
    {
      title: "medialink CES",
      brand: "medialink",
      type: "digital",
      video: "src/assets/videos/marketing-reinvented.mp4",
      img: null,
    },
    {
      title: "converse SoHo",
      brand: "converse",
      type: "environment",
      video: "src/assets/videos/converse-soho.mp4",
      img: null,
    },
    {
      title: "run with nike",
      brand: "nike",
      type: "environment",
      img: "src/assets/images/work/run-with-nike.webp",
      video: null,
    },
    {
      title: "NYFW popup",
      brand: "afterpay",
      type: "experiential",
      video: "src/assets/videos/nyfw-popup.mp4",
      img: null,
    },
    {
      title: "play new kidsvision",
      brand: "nike",
      type: "experiential",
      video: "src/assets/videos/play-new-kidsvision.mp4",
      img: null,
    },
    {
      title: "air force 1 2022",
      brand: "nike",
      type: "environment",
      img: "src/assets/images/work/airforce-1-2022.webp",
      video: null,
    },
    {
      title: "carmelo anthony 7pm in brooklyn set",
      brand: "wave sports entertainment",
      type: "environment",
      video: "src/assets/videos/carmelo-anthony.mp4",
      img: null,
    },
    {
      title: "chicago marathon",
      brand: "nike",
      type: "environment",
      img: "src/assets/images/work/chicago-marathon-2022.webp",
      video: null,
    },
    {
      title: "WSE super bowl pregame party",
      brand: "wave sports entertainment",
      type: "experiential",
      video: "src/assets/videos/wse-super-bowl.mp4",
      img: null,
    },
    {
      title: "CES 2023",
      brand: "medialink",
      type: "experiential",
      img: "src/assets/images/work/ces-2023.webp",
      video: null,
    },
    {
      title: "never done",
      brand: "nike",
      type: "environment",
      img: "src/assets/images/work/never-done.webp",
      video: null,
    },
    {
      title: "olympics play new",
      brand: "nike",
      type: "environment",
      img: "src/assets/images/work/olympics-play-new.webp",
      video: null,
    },
    {
      title: "MLB all star LA",
      brand: "nike",
      type: "environment",
      img: "src/assets/images/work/mlb-all-star-la.webp",
      video: null,
    },
    {
      title: "hunter X nordstrom",
      brand: "hunter",
      type: "experiential",
      video: "src/assets/videos/hunter-x-nordstrom.mp4",
      img: null,
    },
    {
      title: "superrep",
      brand: "nike",
      type: "environment",
      img: "src/assets/images/work/superrep.webp",
      video: null,
    },
    {
      title: "made for play ",
      brand: "paterson",
      type: "digital",
      img: "src/assets/images/work/made-for-play.jpeg",
      video: null,
    },
  ];

  const [selected, setSelected] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState([]);

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
    <>
      <section className="work-container relative py-40 max-w-[1350px] mx-auto ">
        <Blob WidthHeight="w-[600px] h-[600px]" position="absolute top-[0%] left-[0%] z-[-1]" transform="translate-x-[30%] sm:translate-x-[50%] translate-y-[0%]" customClass="moving_blob" />
        <div className="ml-8">
          <h1 className="uppercase text-[7rem] sm:text-[10rem] leading-[10rem]">work</h1>
          {filter.length > 0 && (
            <nav>
              <ul className="text-sm rounded-full font-light border-[1px] border-customGray text-customGray bg-transparent flex w-fit p-1">
                {filter.map((filter, index) => (
                  <li
                    key={filter}
                    onClick={() => handleSelectedFilter(index, filter)}
                  >
                    <button
                      className={`capitalize text-black py-2 px-4 rounded-full ${selected == 0
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
                className="relative overflow-hidden rounded-2xl odd:h-[400px] even:h-[300px] "
              >
                <div className="overlay"></div>
                {project.img != null && (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="transition-all ease-linear hover:scale-[1.3] object-cover w-full h-full rounded-2xl"
                  />
                )}
                {project.video != null && (
                  <video
                    src={project.video}
                    loop={true}
                    muted={true}
                    autoPlay={true}
                    controls={false}
                    className="transition-all hover:scale-[1.1] object-cover w-full h-full rounded-2xl"
                  ></video>
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
    </>
  );
};

export default Work;
