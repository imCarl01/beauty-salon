import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Define the contact information
const contactInfo = [
  { 
    icon: Mail, 
    title: "Email", 
    value: "hello@beautysalon.com", 
    link: "mailto:hello@beautysalon.com" 
  },
  { 
    icon: Phone, 
    title: "Phone", 
    value: "+61 2 9876 5432", 
    link: "tel:+61298765432" 
  },
  { 
    icon: MapPin, 
    title: "Office", 
    value: "45 Martin Place, Sydney NSW 2000, Australia", 
    link: "#" // In a real app, this might link to Google Maps
  },
];

const ContactSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          
          {/* Left Column: Text and Heading */}
          <div className="space-y-4">
            <p className="font-semibold text-[#C5A572] uppercase tracking-wider text-sm">Connect</p>
            <h1 className="font-bold text-5xl text-[#1A1A1A]">Get in touch</h1>
            <p className="text-gray-600 max-w-sm">
              We're here to answer your questions and help you book your perfect beauty experience.
            </p>
          </div>
          
          {/* Right Column: Contact Details */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <item.icon size={24} className="text-[#C5A572] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <a 
                    href={item.link} 
                    className="text-gray-600 hover:text-[#C5A572] transition duration-200 block"
                    target={item.link.startsWith('http') || item.link.startsWith('mailto') || item.link.startsWith('tel') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
        
        {/* Google Map Embed */}
        <div className="mt-16 md:mt-24">
          <div className="w-full h-80 bg-gray-100 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
            
            <iframe
              title="Salon Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8435599555337!2d151.20835557487302!3d-33.86792237322693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afb991ff9fad%3A0x5348ad3f2fefd7f0!2s45%20Martin%20Pl%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1759993668611!5m2!1sen!2sus"
              className="w-full h-full border-0" // Use w-full and h-full for responsiveness
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Optional: Location label overlay */}
            <div className='absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-xl border border-[#C5A572]'>
                <p className='text-sm font-medium text-gray-800'>45 Martin Place, Sydney</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
