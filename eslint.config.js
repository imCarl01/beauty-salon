import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../public/image/logo.png";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/book", label: "Book" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b text-[#1A1A1A] bg-[#FFF8F5]/70 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Beauty Salon Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#C5A572] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3">
              <button className="px-5 py-2 text-white rounded-md bg-[#C5A572] text-sm font-semibold hover:bg-[#A67C52] transition-colors">
                Apply
              </button>
              <button className="px-5 py-2 rounded-md text-sm font-semibold text-white bg-[#1A1A1A] hover:bg-[#A67C52] transition-colors">
                Learn
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-fadeIn bg-[#FFF8F5]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm font-medium text-[#1A1A1A] hover:text-[#C5A572] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <button className="py-2 rounded-md text-sm font-semibold text-white bg-[#C5A572] hover:bg-[#A67C52] transition-colors">
                Apply
              </button>
              <button className="py-2 rounded-md text-sm font-semibold text-white bg-[#1A1A1A] hover:bg-[#A67C52] transition-colors">
                Learn
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
