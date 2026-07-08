import React from "react";
import www from "../assets/image/www.png";
import frontend from "../assets/image/frontend.png";
import { Camera, Clapperboard } from "lucide-react";

const Card = () => {
  return (
    <div data-aos="flip-left">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-10 lg:mx-20 mx-8">

        {/* Web Developer */}
        <div
          id="card"
          className="bg-gray-700 shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 hover:bg-gray-800 transition-all duration-300"
        >
          <img
            src={www}
            alt="Web Developer"
            width={55}
            className="mt-5"
          />

          <h3 className="text-center mt-8 font-bold text-white text-2xl">
            Web Developer
          </h3>
        </div>

        {/* Frontend Developer */}
        <div
          id="card"
          className="bg-gray-700 shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 hover:bg-gray-800 transition-all duration-300"
        >
          <img
            src={frontend}
            alt="Frontend Developer"
            width={55}
            className="mt-5"
          />

          <h3 className="text-center mt-8 font-bold text-white text-2xl">
            Frontend Developer
          </h3>
        </div>

        {/* Photography */}
        <div
          id="card"
          className="bg-gray-700 shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 hover:bg-gray-800 transition-all duration-300"
        >
          <Camera
            size={55}
            className="mt-5 text-cyan-400"
          />

          <h3 className="text-center mt-8 font-bold text-white text-2xl">
            Photography
          </h3>
        </div>

        {/* Videography */}
        <div
          id="card"
          className="bg-gray-700 shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 hover:bg-gray-800 transition-all duration-300"
        >
          <Clapperboard
            size={55}
            className="mt-5 text-cyan-400"
          />

          <h3 className="text-center mt-8 font-bold text-white text-2xl">
            Videography
          </h3>
        </div>

      </div>
    </div>
  );
};

export default Card;