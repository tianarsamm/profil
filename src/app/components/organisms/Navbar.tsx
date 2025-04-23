"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-[#68c7c1] w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Tian<span className="text-[#dc5341]">ARSAM</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-1xl font-bold text-[#dc5341]">
          <Link 
            href="#about" 
            className="hover:text-white transition"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </Link>
          <Link 
            href="#gallery" 
            className="hover:text-white transition"
            onClick={(e) => scrollToSection(e, 'gallery')}
          >
            Gallery
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-white transition"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-700 hover:text-green-500 p-2 rounded"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-black font-semibold">
          <Link 
            href="#about" 
            className="block hover:text-green-500"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </Link>
          <Link 
            href="#gallery" 
            className="block hover:text-green-500"
            onClick={(e) => scrollToSection(e, 'gallery')}
          >
            Gallery
          </Link>
          <Link 
            href="#contact" 
            className="block hover:text-green-500"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
