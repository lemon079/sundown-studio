import React, { useState } from "react";

const Services = () => {

  const services = [
    {
      text: "design",
      paragraph:
        "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
      image: 'src/assets/images/design-service.webp',
    },
    {
      text: "project",
      paragraph:
        "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
      image: 'src/assets/images/project-service.webp',
    },
    {
      text: "execution",
      paragraph:
        "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
      image: 'src/assets/images/execution-service.webp',
    },
  ];

  const [selected, setSelected] = useState(0);

  function activeService(index) {
    setSelected(index);
  }

  return (
    <>
      {services.length > 0 && (
        <section className="services-container my-20 mx-10 overflow-hidden max-w-[1270px] xl:mx-auto">
          <div className="wrapper grid grid-cols-1 md:grid-cols-2 bg-black rounded-2xl ">
            <section className="service-container py-10 md:p-10 lg:p-20 rounded-2xl text-customWhite flex flex-col gap-5 items-center justify-center">
              <div className="capitalize text-6xl md:text-5xl lg:text-6xl">
                {services.map((service, index) => (
                  <h2 key={service.text}
                    className={`pl-3 border-l-2 md:border-l-4 cursor-pointer transition-all ${selected == index
                      ? "text-customWhite border-customOrangeRed"
                      : "text-customGray/50 border-customGray/50"
                      }`}
                    onClick={() => activeService(index)}
                  >
                    {service.text}
                  </h2>
                ))}
              </div>
              <p className="services-paragraph font-light max-w-[280px] md:max-w-[240px] lg:max-w-[340px] text-sm lg:text-lg">
                {services[selected].paragraph}
              </p>
            </section>
            <section className="image-container">
              <img
                src={services[selected].image}
                alt={services[selected].text}
                className="w-full h-full rounded-2xl object-cover object-right"
              />
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default Services;