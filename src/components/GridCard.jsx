import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Assuming you have this image placeholder
import testImage from "../assets/images/salonTestImage.jpg"; 

const GridCard = ({ category, title, desc , image }) => {
  return (
    // h-full ensures all small cards stretch to fill the height of their grid cell
    <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
        {/* Placeholder image/slot based on the wireframe */}
        <div className="w-full h-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="p-4 space-y-2 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-sm text-gray-500">{category}</p>
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-gray-600 text-sm mt-1">{desc}</p>
        </div>

        <Link
          to="/book"
          className="flex items-center gap-1 text-sm font-semibold text-[#C5A572] hover:underline mt-3"
        >
          Book <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default GridCard;