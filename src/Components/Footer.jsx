import React from "react";
import "../index.css";
import { CiGlobe } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Aurora from "./ui/Aurora";

const Footer = () => {
  const links = [
    { link: "work", path: "/work" },
    { link: "studio", path: "/studio" },
    { link: "contact", path: "/contact" },
  ];

  return (
    <div className="footer-container relative w-screen pb-10 capitalize md:h-screen text-white bg-black grid items-center">
        <Aurora
          colorStops={["#fe330a", "#fe330a", "#fe330a"]}
          blend={0.5}
          amplitude={0.9}
          speed={0.8}
        />
      <div className="relative z-50 px-8 md:px-16 grid items-center grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0">
        <ul className="page-navigation-links space-y-3 w-fit">
          {links.map(({ link, path }) => (
            <Link
              to={path}
              key={link}
              className="text-3xl font-bold block transition-all hover:text-customWhite"
            >
              {link}
            </Link>
          ))}
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
      <div className="footer-logo-wrapper my-8">
        <h2 className="text-6xl sm:text-[20vw] text-center font-bold">
          sundown
        </h2>
      </div>
      <div className="footer-links-wrapper capitalize text-sm font-light border-t-[1px] mx-10 pt-10 flex flex-wrap justify-between">
        <h4>Copyright &copy; sundown studio</h4>
        <h4 className="flex items-center gap-1">
          <CiGlobe /> Brooklyn, NY
        </h4>
        <a href="https://www.instagram.com" className="flex items-center gap-1">
          <FaInstagram /> instagram
        </a>
        <a href="https://www.linkedin.com" className="flex items-center gap-1">
          <FaLinkedin /> linkedin
        </a>
      </div>
    </div>
  );
};

export default Footer;
