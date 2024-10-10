import React, { useEffect } from "react";
import carPng from "../../assets/car.png"; // Car image path
import yellowCar from "../../assets/banner-car.png"; // Alternative car image path
import AOS from "aos"; // Animation library for scroll effects
import "aos/dist/aos.css"; // AOS CSS for styles

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS
  }, []);

  const carAnimation = {
    animation: "carEntry 3s ease-in-out forwards", // Define animation
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex items-center justify-center relative">
        {/* Car Image Section */}
        <img
          src={theme === "dark" ? carPng : yellowCar}
          alt="Car"
          className="sm:scale-125 car-image"
          style={carAnimation}
        />

        {/* Overlay for better text readability */}
        <div className="overlay" />

        {/* Card for Text and Button with blurry background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-8 space-y-5 z-20 backdrop-blur-md bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
          <p data-aos="fade-up" className="text-white text-2xl font-serif">
            Adventures waiting for you!
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-white text-5xl lg:text-7xl font-semibold font-serif"
          >
            Rent IT ▲
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-white text-lg"
          >
            Make your trip with us!
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="1500"
            onClick={() => {
              AOS.refreshHard();
            }}
            className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-3 px-8 text-black font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

