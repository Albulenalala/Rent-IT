import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Prices in Market",
    icon: (
      <FaCameraRetro className="text-6xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem Ipsum",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-6xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem Ipsum",
    aosDelay: "500",
  },
  {
    name: "Happy Clients",
    icon: (
      <SlNote className="text-6xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem Ipsum",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why You Should Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group p-6 sm:p-8 bg-gray-800 hover:bg-primary duration-300 text-white hover:text-black rounded-lg shadow-lg transform transition-all hover:scale-105"
                style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="grid place-items-center mb-4">
                  {skill.icon}
                </div>
                <h1 className="text-xl sm:text-2xl font-bold mb-2">{skill.name}</h1>
                <p className="text-sm sm:text-base">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
