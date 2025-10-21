import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Assuming you have this image placeholder
import testImage from "../assets/images/salonTestImage.jpg"; 

const BigGridCard = () => {
  return (
    // h-full is CRITICAL here to ensure it stretches across the two rows
    <div className="border border-gray-300 rounded-lg overflow-hidden w-full h-full hover:shadow-xl transition-all flex flex-col">
      
      {/* Image: Adjusted height for desktop (lg:h-64) to better fit the two small cards */}
      <div className="w-full h-60 lg:h-80 bg-gray-200 flex items-center justify-center">
        <div className="w-full h-full">
            <img src={testImage} alt="Comprehensive packages" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-500">Complete</p>
          <h1 className="font-bold text-2xl md:text-3xl">Comprehensive beauty packages</h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Tailored experiences that combine multiple services for total transformation.
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          <Link
            to="/explore"
            className="px-5 py-2 bg-[#C5A572] text-white rounded-md font-medium hover:bg-[#A67C52] transition-colors"
          >
            Explore
          </Link>
          <Link
            to="/details"
            className="flex items-center gap-1 text-[#C5A572] font-semibold hover:underline"
          >
            Details <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigGridCard;