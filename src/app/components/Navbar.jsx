'use client';
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-30">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-3xl text-green-700">
          <span className="bg-green-700 text-white rounded-lg px-2 py-1 text-xl">VOCA</span>
          <span className="hidden sm:inline text-gray-800 font-semibold">budgeting</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-800 text-lg hover:text-green-700 transition">Features</a>
          <a href="#how" className="text-gray-800 text-lg hover:text-green-700 transition">How it Works</a>
          <a href="#contact" className="text-gray-800 text-lg hover:text-green-700 transition">Contact</a>
          <button className="ml-4 bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition">Join the Waitlist</button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Icons8 Hamburger Menu SVG Outline */}
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="32" height="4" rx="2" fill="#15803d"/>
            <rect y="14" width="32" height="4" rx="2" fill="#15803d"/>
            <rect y="22" width="32" height="4" rx="2" fill="#15803d"/>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 flex flex-col items-center gap-4 py-6 md:hidden animate-fade-in z-40">
          <a href="#features" className="text-gray-800 text-xl hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how" className="text-gray-800 text-xl hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#contact" className="text-gray-800 text-xl hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition" onClick={() => setMenuOpen(false)}>Join the Waitlist</button>
        </div>
      )}
    </nav>
  );
} 