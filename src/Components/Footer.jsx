import React from "react";
import "../index.css";
import { CiGlobe } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { link: "work", path: "/work" },
    { link: "studio", path: "/studio" },
    { link: "contact", path: "/contact" },
  ];

  return (
    <>
      <div className="footer-container w-screen h-[75vh] md:h-screen capitalize text-white fixed bottom-10 sm:bottom-0 z-[99] grid items-center">
        <div className="line footer w-[130%] h-[30%] absolute top-0 left-0 z-[-1] translate-x-[-14%] translate-y-[115%] rotate-[20deg] bg-customOrangeRed blur-[200px]"></div>
        {
          <div className="px-8 md:px-16 grid items-center grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0">
            <ul className="page-navigation-links space-y-3 w-fit">
              {links.map(({ link, path }) => {
                return (
                  <Link
                    to={path}
                    key={link}
                    className="text-3xl font-bold block transition-all hover:text-customWhite"
                  >
                    {link}
                  </Link>
                );
              })}
            </ul>
            <div className="email-box space-y-5 max-w-[335px] sm:max-w-[400px] sm:mx-auto">
              <h2 className="font-light text-xl sm:text-2xl pr-8">
                get industry insights and creative inspiration straight to your
                inbox
              </h2>
              <form className="relative text-xl" method="post">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full"
                />
                <button className="text-3xl absolute right-0 top-3">
                  <HiArrowLongRight />
                </button>
              </form>
            </div>
          </div>
        }
        <div className="footer-logo-wrapper">
          <h2 className="text-[20vw] md:text-[22vw] md:leading-[25vh] text-center font-bold">
            sundown
          </h2>
        </div>
        <div className="footer-links-wrapper capitalize font-light border-t-[1px] mx-10 pt-10 flex flex-wrap justify-between">
          <h4>Copyright &copy; sundown studio</h4>
          <h4 className="flex items-center gap-1">
            <CiGlobe /> Brooklyn, NY
          </h4>
          <a href="www.instagram.com" className="flex items-center gap-1">
            <FaInstagram />
            instagram
          </a>
          <a href="www.linkedin.com" className="flex items-center gap-1">
            <FaLinkedin />
            linkedin
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
