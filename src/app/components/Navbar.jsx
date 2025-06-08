'use client';
import { useState, useEffect } from "react";

export default function Navbar({ onWaitlistClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Use useEffect to ensure client-side only rendering for dynamic classes
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <nav className="w-full fixed top-0 left-0 z-30 bg-white/60 backdrop-blur border-b border-green-100 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto mt-4 flex items-center justify-between py-3 px-4 md:px-8 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-3xl text-green-700 cursor-pointer hover:scale-105 transition-transform">
          <span className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl px-3 py-1 text-xl shadow hover:shadow-lg transition">VOCA</span>
          <span className="hidden sm:inline text-gray-800 font-semibold tracking-wide">budgeting</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-800 text-lg font-semibold hover:text-green-700 hover:underline underline-offset-4 transition">Features</a>
          <a href="#how" className="text-gray-800 text-lg font-semibold hover:text-green-700 hover:underline underline-offset-4 transition">How it Works</a>
          <a href="#pricing" className="text-gray-800 text-lg font-semibold hover:text-green-700 hover:underline underline-offset-4 transition">Pricing</a>
          <a href="#contact" className="text-gray-800 text-lg font-semibold hover:text-green-700 hover:underline underline-offset-4 transition">Contact</a>
          <button onClick={onWaitlistClick} className="ml-4 bg-gradient-to-r from-green-600 to-green-400 text-white px-6 py-2 rounded-full font-bold shadow hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all duration-200">Join the Waitlist</button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full focus:outline-none bg-white/70 shadow hover:scale-110 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Animated Hamburger Icon */}
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Only apply dynamic classes after mounting on client */}
            <rect 
              y="6" 
              width="32" 
              height="4" 
              rx="2" 
              fill="#15803d" 
              className={mounted ? `transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-4' : ''}` : 'transition-all duration-300'}
            />
            <rect 
              y="14" 
              width="32" 
              height="4" 
              rx="2" 
              fill="#15803d" 
              className={mounted ? `transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}` : 'transition-all duration-300'}
            />
            <rect 
              y="22" 
              width="32" 
              height="4" 
              rx="2" 
              fill="#15803d" 
              className={mounted ? `transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-4' : ''}` : 'transition-all duration-300'}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu - Only render on client */}
      {mounted && menuOpen && (
        <div className="absolute top-20 left-0 w-full flex flex-col items-center gap-4 py-6 md:hidden animate-fade-in z-40 bg-white/80 backdrop-blur-xl rounded-b-2xl shadow-lg border-t border-green-100 transition-all duration-300">
          <a href="#features" className="text-gray-800 text-xl font-semibold hover:text-green-700 hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how" className="text-gray-800 text-xl font-semibold hover:text-green-700 hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#pricing" className="text-gray-800 text-xl font-semibold hover:text-green-700 hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" className="text-gray-800 text-xl font-semibold hover:text-green-700 hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          <button onClick={() => { setMenuOpen(false); onWaitlistClick && onWaitlistClick(); }} className="bg-gradient-to-r from-green-600 to-green-400 text-white px-8 py-3 rounded-full font-bold shadow hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all duration-200">Join the Waitlist</button>
        </div>
      )}
    </nav>
  );
} 