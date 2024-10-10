import React from "react";
import pattern from "../../assets/website/pattern.jpg";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div className="container">
      <div
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
             Book your car now!
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis non voluptates ratione iure dolorum excepturi minima libero ipsum porro quibusdam, reprehenderit quas nihil architecto explicabo. Impedit blanditiis iure sint?
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER" 
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                target="_blank"
                rel="noopener noreferrer">
                WhatsApp
              </a>
              <a
                href="tel:+35#########"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
