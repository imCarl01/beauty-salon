import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

// Data for navigation links
const quickLinks = [
  { name: 'Services', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Booking', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'FAQ', href: '#' },
];

const companyLinks = [
  { name: 'About us', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Blog', href: '#' },
];

// Data for social media links
const socialLinks = [
  { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:text-blue-600' },
  { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:text-pink-500' },
  { icon: Twitter, name: 'X', href: '#', color: 'hover:text-gray-900' },
  { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
  { icon: Youtube, name: 'Youtube', href: '#', color: 'hover:text-red-600' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-10 border-b border-gray-300 pb-12 mb-8">
          
          {/* Column 1: Logo, Description, and Newsletter (Spans 4 columns on MD/LG) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-4">
            <h2 className="text-3xl font-serif font-light text-[#1A1A1A]">Beauty Salon</h2>
            <p className="text-sm text-gray-600 max-w-xs">
              Stay updated with our latest beauty trends and exclusive offers
            </p>
            
            {/* Newsletter Subscription Form */}
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-2">
              <input
                type="email"
                placeholder="Enter email address"
                aria-label="Enter email address for newsletter"
                className="p-3 border border-gray-300 rounded-lg text-sm flex-grow focus:ring-1 focus:ring-[#C5A572] focus:border-[#C5A572]"
              />
              <button
                type="submit"
                // --- EDITED: Changed background and hover color to the primary accent color ---
                className="px-4 py-3 bg-[#C5A572] text-white text-sm font-medium rounded-lg hover:bg-opacity-90 transition duration-300 flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 pt-1">
              By subscribing, you agree to our privacy policy.
            </p>
          </div>
          
          {/* Spacer Column (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-1"></div>
          
          {/* Column 2: Quick Links (Spans 2 columns on MD, 2 on LG) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-gray-800 uppercase text-sm mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 text-sm hover:text-[#C5A572] transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Company (Spans 2 columns on MD, 2 on LG) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-gray-800 uppercase text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 text-sm hover:text-[#C5A572] transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Follow Us (Spans 2 columns on MD, 3 on LG) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 space-y-3">
            <h3 className="font-semibold text-gray-800 uppercase text-sm mb-4">Follow us</h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className={`flex items-center space-x-2 text-gray-600 text-sm transition duration-200 ${link.color}`}
                    aria-label={`Follow us on ${link.name}`}
                  >
                    <link.icon size={20} className="flex-shrink-0" />
                    <span className="hover:text-[#C5A572]">{link.name}</span> {/* Added hover color to text */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-4 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} Beauty Salon. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#C5A572] transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5A572] transition duration-200">Terms of Service</a>
            <a href="#" className="hover:text-[#C5A572] transition duration-200">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
