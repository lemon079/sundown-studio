import React from "react";
import OrangeBall from "../GeneralComponents/OrangeBall";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MarqueeText = () => {
    useGSAP(
        () => {
            gsap.to(".marquee-animate", {
                translateX: "-100%",
                repeat: -1,
                duration: 10,
                ease: "linear",
            });
        },
        { scope: ".marquee-container" }
    );

    const marquee = [
        { text: "content" },
        { text: "environment" },
        { text: "experiences" },
    ];

    return (
        <section className="marquee-container my-18 sm:my-36 pointer-events-none">
            <h2 className="uppercase flex">
                <div className="marquee-animate flex items-center text-5xl sm:text-9xl">
                    {marquee.map((marquee) => (
                        <div key={marquee.text} className="flex items-center">
                            <span>{marquee.text}</span>
                            <OrangeBall
                                dimensions="w-8 sm:w-14 h-8 sm:h-14"
                                customClass="mx-5"
                            />
                        </div>
                    ))}
                </div>

                <div className="marquee-animate flex items-center text-5xl sm:text-9xl">
                    {marquee.map((marquee) => (
                        <div key={marquee.text} className="flex items-center">
                            <span>{marquee.text}</span>
                            <OrangeBall
                                dimensions="w-8 sm:w-14 h-8 sm:h-14"
                                customClass="mx-5"
                            />
                        </div>
                    ))}
                </div>
            </h2>
        </section>
    );
};

export default MarqueeText;
