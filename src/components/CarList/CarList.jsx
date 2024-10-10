import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "Mercedes Benz GLC Coupe ",
    price: 500,
    transmission: "Sporty & Spacious",
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Mercedes Benz G-Class SUV",
    price: 500,
    transmission: "Off-Road Icon",
    image: car2,
    aosDelay: "500",
  },
  {
    name: "THE MERCEDES-MAYBACH EQS SUV",
    price: 500,
    transmission: "The finest in luxury. The best of electric.",
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container mx-auto">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-4xl font-semibold font-serif mb-3 text-center"
        >
          Latest Brands
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-lg text-center pb-10 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi tempore harum ad veniam accusantium dolorum quo minus aut nihil, saepe sint earum rem ullam esse deserunt! Labore, minima perferendis.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-4 border-2 border-gray-200 hover:border-primary p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 group"
              >
                <div className="w-full h-[200px]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h1 className="text-primary font-bold text-2xl">{data.name}</h1>
                  <div className="flex justify-center items-center space-x-4 text-xl font-semibold">
                    <p className="text-gray-600">€{data.price}/Day</p>
                    <p className="text-sm text-gray-500">{data.transmission}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-12">
          <button
            data-aos="fade-up"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 transition-colors duration-300"
          >
          Call now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
