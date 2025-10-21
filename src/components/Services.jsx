import React from "react";
import GridCard from "./GridCard";
import BigGridCard from "./BigGridCard";
import img1 from '../assets/images/classic cut image.jpg'
import img2 from '../assets/images/makeup.jpg'
import img3 from '../assets/images/Rejuvenating treatments.jpg'
import img4 from '../assets/images/nailesss.avif'
const Services = () => {
  return (
    <div className="w-full mt-20">
      
      {/* Section Header (Unchanged) */}
      <section className="text-center space-y-3 mb-12 px-4">
        <p className="font-semibold text-[#C5A572] uppercase tracking-wide">Transform</p>
        <h1 className="font-bold text-4xl md:text-5xl">Our Signature Services</h1>
        <p className="text-gray-600">Discover treatments designed to elevate your natural beauty</p>
      </section>

      {/* Grid Container: Single, Unified Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 items-stretch">
        
        {/* 1. Hair Card (Top Left) - Default order 1 */}
        <div className="col-span-1 order-1">
          <GridCard category="Hair" title="Classic cuts" desc="Precision styling for modern looks" image={img1} />
        </div>

        {/* 2. Makeup Card (Top Center) - Default order 2 */}
        <div className="col-span-1 order-2">
          <GridCard category="Makeup" title="Glamour session" desc="Professional makeup for every occasion" image={img2} />
        </div>

        {/* 4. Spa Card (Bottom Left) - Order 3 on mobile */}
        <div className="col-span-1 order-3 lg:order-4">
          <GridCard category="Spa" title="Relaxation ritual" desc="Rejuvenating treatments for mind and body" image={img3}/>
        </div>

        {/* 5. Nails Card (Bottom Center) - Order 4 on mobile */}
        <div className="col-span-1 order-4 lg:order-5">
          <GridCard category="Nails" title="Manicure magic" desc="Elegant nail designs and care" image={img4}/>
        </div>
        
        {/* 3. Comprehensive Packages (Big Card) - MOVED TO THE END */}
        {/* order-5 ensures it appears LAST on mobile. */}
        {/* lg:order-3 pushes it back to the third column on desktop. */}
        <div className="col-span-2 row-span-2 lg:col-span-1 order-5 lg:order-3">
          <BigGridCard />
        </div>
        
      </div>
    </div>
  );
};

export default Services;