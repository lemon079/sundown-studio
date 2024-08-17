import React, { useState } from "react";
import '../../index.css'
import SmallSubHeading from "../GeneralComponents/SmallSubHeading";
import { HiArrowLongRight } from "react-icons/hi2";

const FeaturedProducts = () => {
    const projects = [
        {
            name: "NYFW popup",
            brand: "afterpay",
            type: "experiential",
            videoLink: "/videos/nyfw-popup.mp4",
        },
        {
            name: "play new kidvision",
            brand: "nike",
            type: "environment",
            videoLink: "/videos/play-new-kidsvision.mp4",
        },
        {
            name: "capezio NYC flagship",
            brand: "capezio",
            type: "environment",
            videoLink: "/videos/capezio-nyc-flagship.mp4",
        },
        {
            name: "converse SoHo",
            brand: "capezio",
            type: "environment",
            videoLink: "/videos/converse-soho.mp4",
        },
        {
            name: "50th anniversary",
            brand: "nike",
            type: "environment",
            videoLink: "/videos/nyfw-popup.mp4",
            // actual video wasn't available
        },
        {
            name: "kelce super bowl party",
            brand: "wave sports entertainment",
            type: "experiential",
            videoLink: "/videos/kelce-super-bowl-party.mp4",
        },
        {
            name: "carmelo anthony 7pm in brooklyn set",
            brand: "wave sports entertainment",
            type: "environment",
            videoLink: "/videos/carmelo-anthony.mp4",
        },
        {
            name: "makers studio HOI",
            brand: "nike",
            type: "experiential",
            videoLink: "/videos/capezio-nyc-flagship.mp4",
            // actual video wasn't available
        },
    ];


    return (
        <>
            {projects.length > 0 && (
                <section className="featured-projects-container my-20">
                    <div className="wrapper space-y-14">
                        <SmallSubHeading text="featured projects" customClass="ml-8" />
                        <section className="projects-list-container mt-20">
                            <ul className="grid justify-center gap-5 lg:gap-0 px-5 lg:px-0 sm:grid-cols-2  lg:grid-cols-1 ">
                                {projects.map((project) => (
                                    <SingleProject key={project.name} project={project} />
                                ))}
                            </ul>
                        </section>
                        <div className="ml-8 link-tag-parent-animate border-[1px] w-fit rounded-full after:rounded-full after:bg-black after:top-full hover:after:top-0">
                            <a href="#" className="link-tag-animate capitalize relative font-light block py-2 px-8 hover:text-white">all projects <HiArrowLongRight className="ml-2 text-2xl inline-block" />
                            </a>
                        </div>

                    </div>
                </section>
            )}
        </>
    );
};

export default FeaturedProducts;


const SingleProject = ({ project }) => {

    const [isMouseEntered, setIsMouseEntered] = useState(false);

    function onEnter() {
        setIsMouseEntered(true);
    }

    function onLeave() {
        setIsMouseEntered(false);
    }

    
    
    return (
        <li className="my-10 md:my-0 max-w-[400px] md:max-w-full">
            <video
                src={project.videoLink ? project.videoLink : null}
                className={`object-cover rounded-xl lg:fixed pointer-events-none z-[200] top-24 right-80 lg:w-[25%] h-[500px] lg:h-[70%] ${isMouseEntered ? "lg:block" : "lg:hidden"}`}
                loop={true}
                muted={true}
                autoPlay={true}
                controls={false}
            ></video>
            <div className="link-tag-parent-animate lg:border-b-[1px] mt-5 lg:mt-0 lg:after:bg-customOrange after:-top-full after:hover:top-0" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <a href="#" className="link-tag-animate lg:p-8 flex flex-col lg:flex-row justify-between lg:items-center capitalize">
                    <h2 className="text-4xl lg:text-5xl">{project.name}</h2>
                    <h3 className="lg:text-right">
                        <div className="uppercase font-medium">
                            {project.brand}
                        </div>
                        <div className="capitalize font-light text-customGray">
                            {project.type}
                        </div>
                    </h3>
                </a>
            </div>
        </li>
    )
}