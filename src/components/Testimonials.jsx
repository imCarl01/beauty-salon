import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

// Mock data for the testimonials
const testimonials = [
  {
    id: 1,
    quote: "My confidence soared after my first visit. Exceptional skill and attention to detail!",
    name: "Emma Wilson",
    title: "Marketing Director",
    avatar: "https://placehold.co/80x80/C5A572/FFFFFF?text=EW",
    // Added logoUrl for company image
    logoUrl: "https://placehold.co/120x32/F5F5F5/333333?text=WEBFLOW",
  },
  {
    id: 2,
    quote: "Exceptional service and stunning results. I finally found my permanent stylist.",
    name: "Michael Chen",
    title: "Creative Professional",
    avatar: "https://placehold.co/80x80/1A1A1A/FFFFFF?text=MC",
    // Added logoUrl for company image

  },
  {
    id: 3,
    quote: "They understand exactly what I want and deliver perfection every time. Highly recommend.",
    name: "Sarah Thompson",
    title: "Business Consultant",
    avatar: "https://placehold.co/80x80/F3D4CF/525252?text=ST",
    // Added logoUrl for company image
  },
  {
    id: 4,
    quote: "A truly relaxing experience from start to finish. The spa treatments are divine.",
    name: "Laura Mendez",
    title: "Project Manager",
    avatar: "https://placehold.co/80x80/A67C52/FFFFFF?text=LM",
    // Added logoUrl for company image

  },
];

// Component for a single testimonial card
const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-full snap-center p-6 border border-gray-200 rounded-xl bg-white shadow-lg flex flex-col justify-between h-full">
    <div className="mb-6">
      {/* Updated to display an image for the logo */}
      <img 
        // src={testimonial.logoUrl} 
        // alt={`${testimonial.name}'s company logo`} 
        className="h-6 w-auto mb-4 object-contain"
        onError={(e) => { e.target.style.display = 'none'; }} // Hide image element if it fails to load
      />
      <Quote size={32} className="text-[#C5A572] mb-3 opacity-70" />
      <p className="italic text-lg text-gray-800 leading-relaxed">"{testimonial.quote}"</p>
    </div>
    
    <div className="flex items-center pt-4 border-t border-gray-100">
      {/* Avatar Image */}
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#C5A572]/50"
        onError={(e) => { e.target.src = "https://placehold.co/80x80/C5A572/FFFFFF?text=AV"; }}
      />
      <div>
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
    </div>
  </div>
);


const Testimonials = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the total number of items shown per view (responsive)
  const calculateItemsPerView = () => {
    if (typeof window === 'undefined' || !scrollRef.current) return 1;
    if (window.innerWidth >= 1024) return 3; // lg: 3 cards
    if (window.innerWidth >= 768) return 2; // md: 2 cards
    return 1; // sm: 1 card
  };
  
  // Custom scrolling function
  const scrollCarousel = useCallback((direction) => {
    if (scrollRef.current) {
      // Recalculate card width and gap dynamically
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 24; // Tailwind gap-6 is 24px
      
      const itemsPerView = calculateItemsPerView();
      const scrollAmount = (cardWidth + gap) * itemsPerView * direction;

      const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      // Update index for pagination visibility (approximation)
      const newIndex = Math.max(0, Math.min(
        Math.floor(newScrollLeft / (cardWidth + gap)), 
        testimonials.length - itemsPerView
      ));
      setCurrentIndex(newIndex);
    }
  }, []);

  // Determine the number of dots needed for pagination
  const itemsPerView = calculateItemsPerView();
  const maxDots = Math.ceil(testimonials.length / itemsPerView);
  
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      
      {/* Section Header and Controls */}
      <div className="text-center space-y-3 mb-12 px-4 max-w-7xl mx-auto">
        <p className="font-semibold text-[#C5A572] uppercase tracking-wide">What client says</p>
        <h2 className="font-bold text-4xl md:text-5xl text-[#1A1A1A]">Testimonials</h2>
        <p className="text-gray-600">Real stories from our valued clients</p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Scrollable Testimonial Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-scroll snap-x snap-mandatory py-4 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((testimonial) => (
            <div 
                key={testimonial.id} 
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 snap-always snap-center"
            >
                <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollCarousel(-1)}
            className="absolute left-0 top-1/2 -mt-10 p-3 rounded-full bg-white border border-gray-300 shadow-md text-gray-700 hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => scrollCarousel(1)}
            className="absolute right-0 top-1/2 -mt-10 p-3 rounded-full bg-white border border-gray-300 shadow-md text-gray-700 hover:bg-gray-100 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Pagination Dots (Mobile/General) */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxDots }).map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-full transition-colors duration-300 ${
                index === Math.floor(currentIndex / itemsPerView) ? 'bg-[#C5A572]' : 'bg-gray-300 hover:bg-gray-400'
              } cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
