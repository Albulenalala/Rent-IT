import React from "react";

const testimonialData = [
  {
    name: "-Amar-",
    image: "",
    description: "The Best rental car. ",
    aosDelay: "0",
  },
  {
    name: "-Sabrina-",
    image: "",
    description: "The Best rental car .",
    aosDelay: "300",
  },
  {
    name: "-Kanye-",
    image: "",
    description: "The Best rental car .",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
             Customer Feedback
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure nam distinctio asperiores. Facere, illo ipsum quo aspernatur praesentium numquam obcaecati impedit quaerat. Quasi vel aliquam ad dicta, voluptate commodi quo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl"> ★ ★ ★ ★ ★</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
