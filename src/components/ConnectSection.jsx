import React from "react";
import nailsVideo from "../assets/videos/nailsVideo.mp4";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, HandPlatter } from "lucide-react";
const ConnectSection = () => {
  return (
    <div className="mt-15 px-6 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        

        {/* Image Section */}
        <section className="w-full md:w-1/2">
        <video
                src={nailsVideo}
                alt="Beauty salon - washing of hair"
                className=" w-full max-h-[450px] object-contain rounded-md shadow-md"
                muted
                autoPlay
                loop
              />
        </section>

        {/* Text Section */}
        <section className="w-full md:w-1/2 space-y-3">
        <p className="font-semibold">Connect</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
        Simple booking for your beauty journey
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
           Schedule your perfect treatment with ease and convenience.
          </p>


            <div className="space-y-2 text-gray-600 text-base md:text-lg">
                <p className="flex gap-2"><HandPlatter />Select your preferred service</p>
                <p className="flex gap-2"><Clock />Choose your ideal time</p>
                <p className="flex gap-2"><Calendar />Confirm your appointment</p>
            </div>
          <div className="flex gap-4">
          <Link
              to="/"
              className="bg-[#C5A572] hover:bg-[#A67C52] text-white px-5 py-2 rounded font-semibold transition"
            >
              Book now
            </Link>
            <Link
          to="/"
          className="bg-white flex gap-2  text-gray-600 px-5 py-2 rounded font-semibold transition"
        >
          Learn more<ArrowRight size={28} />
        </Link>

          </div>
        </section>
      </div>
    </div>
  );
};

export default ConnectSection;
