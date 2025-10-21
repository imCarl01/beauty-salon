import React from 'react'

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1549236177-f9b0031756eb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhaXIlMjBzdHlsaW5nfGVufDB8fDB8fHww", alt: "Elegant blonde hair style", span: "row-span-2" }, // Tall
  { id: 2, url: "https://images.unsplash.com/photo-1690749138086-7422f71dc159?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmljdXJlfGVufDB8fDB8fHww", alt: "Close-up of a premium manicure", span: "row-span-1" }, // Wide
  { id: 3, url: "https://images.unsplash.com/photo-1746723378067-83a345ff3160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1vZGVybiUyMHNhbG9uJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D", alt: "Modern salon interior design", span: "row-span-1" }, // Square
  { id: 4, url: "https://images.unsplash.com/photo-1665703156144-77c1244cb40e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fEJyaWRhbCUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D", alt: "Bridal makeup application", span: "row-span-2" }, // Tall
  { id: 5, url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEx1eHVyeSUyMHBlZGljdXJlJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", alt: "Luxury pedicure station", span: "row-span-1" }, // Very Wide
  { id: 6, url: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fFJlbGF4aW5nJTIwZmFjaWFsJTIwdHJlYXRtZW50fGVufDB8fDB8fHww", alt: "Relaxing facial treatment", span: "row-span-1" }, // Square
];

const Gallery = () => {
  return (
     <section className="w-full py-16 md:py-24 bg-white">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12 px-4 max-w-3xl mx-auto">
        <p className="font-semibold text-[#C5A572] uppercase tracking-wide">Portfolio</p>
        <h1 className="font-bold text-4xl md:text-5xl text-[#1A1A1A]">Beauty in Every Detail</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our recent transformations and signature looks crafted by our team of expert stylists and artists.
        </p>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            // The magic is here: use the 'span' property to control height (row-span)
            // On mobile, all images take row-span-1 for a simple flow
            className={`col-span-1 row-span-1 ${image.span} overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl group cursor-pointer`}
          >
            <img
              src={image.url}
              alt={image.alt}
              // The h-full and object-cover classes ensure the image fills the grid cell without distortion
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              // Fallback for placeholder images
              onError={(e) => { e.target.src = "https://placehold.co/600x600/A67C52/FFFFFF?text=Image+Missing"; }}
            />
            {/* Optional Overlay on Hover for a sophisticated touch */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-sm font-semibold text-white/90 drop-shadow-md">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery