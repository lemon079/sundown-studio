import React from "react";
import SmallSubHeading from "../ui/SmallSubHeading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const BrandPartners = ({
  carousal_item_border_color = "border-customGray",
}) => {
  const brands = [
    {
      paragraph:
        "Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.",
      image: "/images/brands-logo/nike-logo.svg",
    },
    {
      paragraph:
        "Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.",
      image: "/images/brands-logo/converse-logo.svg",
    },
    {
      paragraph:
        "Creative Concepting, 2D & 3D Design, Design Management for work in NYC and across the country.",
      image: "/images/brands-logo/northface-logo.svg",
    },
    {
      paragraph:
        "Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.",
      image: "/images/brands-logo/arcteryx-logo.svg",
    },
    {
      paragraph:
        "Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.",
      image: "/images/brands-logo/hunter-logo.svg",
    },
    {
      paragraph:
        "Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.",
      image: "/images/brands-logo/medialink-logo.svg",
    },
    {
      paragraph:
        "Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve.",
      image: "/images/brands-logo/afterpay-logo.svg",
    },
  ];

  return (
    <>
      <section className="brand-partners-container relative">
        <div className="wrapper space-y-20 pb-24 mt-20">
          <SmallSubHeading text="who we work with" customClass="ml-10" />
          <section className="carousal-container ">
            <Splide
              options={{
                pagination: false,
                drag: "free",
                arrows: false,
                trimSpace: false,
                mediaQuery: "min",
                breakpoints: {
                  0: {
                    fixedWidth: "100%",
                    padding: { left: "30px" },
                  },
                  640: {
                    fixedWidth: "60%",
                    padding: { left: "50px" },
                  },
                  720: {
                    fixedWidth: "40%",
                    padding: { left: "50px" },
                  },
                  1024: {
                    fixedWidth: "40%",
                    padding: { left: "170px" },
                  },
                },
              }}
            >
              {brands.map((brand, index) => (
                <SplideSlide
                  key={`brand-${index + 1}`}
                  className={`h-fit space-y-5 border-l-[1px] ${carousal_item_border_color} pl-10 pr-5 sm:pr-20`}
                >
                  <img
                    src={brand.image}
                    alt={`brand-logo-${index + 1}`}
                    className="w-40"
                  />
                  <p className="font-light text-black max-w-[380px] mr-auto sm:max-w-full text-sm md:text-lg">
                    {brand.paragraph}
                  </p>
                </SplideSlide>
              ))}
            </Splide>
          </section>
        </div>
      </section>
    </>
  );
};

export default BrandPartners;
