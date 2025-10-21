import React from "react";
import { Link } from "react-router-dom";
import salonVideo1 from "../assets/videos/salonvideo1.mp4";

const HeroSection = () => {
  const TEXT_COLOR = "text-white"; 
  const GOLD_COLOR = "bg-[#C5A572]"; 
  const HOVER_GOLD_COLOR = "hover:bg-[#A67C52]"; 
  const OVERLAY_COLOR = "bg-black/40";

  return (
    <section className="relative w-full h-screen overflow-hidden text-white"> 
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={salonVideo1}
        autoPlay
        loop
        muted
        // Added preload="auto" for faster loading if browser allows
        preload="auto" 
      />

      {/* Overlay Tint - Using a darker, more translucent black for better text contrast */}
      <div className={`absolute inset-0 ${OVERLAY_COLOR} backdrop-blur-none`}></div>

      {/* Content - Set text to white for maximum contrast */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className={`text-4xl md:text-7xl font-extrabold leading-tight mb-6 tracking-wide ${TEXT_COLOR}`}>
          Unleash Your <span className="text-[#C5A572]">Inner Beauty</span>
        </h1>
        <p className={`text-xl font-light mb-10 max-w-2xl ${TEXT_COLOR}`}>
          Experience the art of beauty with our professional salon services — 
          from luxury hair treatments to glowing skin care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* PRIMARY CTA: Made the button larger and more prominent (full gold) */}
          <Link
            to="/book"
            className={`px-10 py-4 rounded-lg text-white font-bold text-lg ${GOLD_COLOR} ${HOVER_GOLD_COLOR} shadow-lg transition-all transform hover:scale-[1.03]`}
          >
            Book Your Appointment
          </Link>
          
          {/* SECONDARY CTA: Ghost button with strong white border for better contrast */}
          <Link
            to="/services"
            className={`px-10 py-4 rounded-lg font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-black transition-colors transform hover:scale-[1.03]`}
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;