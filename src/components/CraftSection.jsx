import React from "react";
import washHair from "../assets/videos/washHair.mp4";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const CraftSection = () => {
  return (
    <div className="mt-15 px-6 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <section className="w-full md:w-1/2 space-y-4">
        <p className="font-semibold">Craft</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
        Where artistry meets beauty
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
           We believe beauty is not just about appearance but about confidence and personal expression. Each stylist brings years of experience and passion to every service.
          </p>

          <div className="flex gap-4">
          <Link
              to="/"
              className="bg-[#C5A572] hover:bg-[#A67C52] text-white px-5 py-2 rounded font-semibold transition"
            >
              Learn more
            </Link>
            <Link
          to="/"
          className="bg-white  flex gap-2  text-gray-600 px-5 py-2 rounded font-semibold transition"
        >
          Our Story<ArrowRight size={28} />
        </Link>

          </div>
        </section>

        {/* Image Section */}
        <section className="w-full md:w-1/2">
        <video
                src={washHair}
                alt="Beauty salon - washing of hair"
                className=" w-full max-h-[450px] object-contain rounded-md shadow-md"
                muted
                autoPlay
                loop
              />
        </section>
      </div>
    </div>
  );
};

export default CraftSection;
