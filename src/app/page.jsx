'use client';
import Image from "next/image";
import { useContext } from "react";
import { WaitlistModalContext } from "./ClientLayout";
import PricingSection from "./components/PricingSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const { open } = useContext(WaitlistModalContext);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-400 relative overflow-x-hidden font-sans">
      {/* Animated background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 rounded-full opacity-30 blur-3xl animate-pulse z-0" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-green-500 rounded-full opacity-20 blur-2xl animate-pulse-slow z-0" />
      {/* Hero Section */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 pt-32 pb-16 md:py-40 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight drop-shadow-lg">World's first <br /> <span className="text-green-700">voice powered</span><br className="hidden sm:block"/> budgeting app.</h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 mb-8 font-medium">Log income and expenses with just your voice.<br className="hidden md:block"/> <span className="text-green-800 font-semibold">Manage Your Budget Hands-Free</span></p>
          <button onClick={open} className="bg-gradient-to-r from-green-600 to-green-400 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all duration-200 text-lg">Join the Waitlist</button>
        </div>
        <div className="flex-1 flex justify-center w-full">
          {/* Fake UI Card */}
          <div className="relative w-full max-w-md rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl border border-green-900/20 p-6 md:p-8" style={{minHeight: 420}}>
            <div className="flex flex-col items-center">
              {/* Pulsing Mic Icon */}
              <div className="bg-green-500 rounded-full w-32 h-32 flex items-center justify-center mb-6 shadow-lg animate-pulse">
                {/* Classic Microphone SVG */}
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="none"/>
                  <rect x="9" y="4" width="6" height="10" rx="3" fill="#222"/>
                  <path d="M8 11v1a4 4 0 008 0v-1" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 19v-2" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 21h6" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* Speech bubble */}
              <div className="bg-white/30 border border-green-900/20 rounded-xl px-4 py-3 text-gray-900 text-base sm:text-lg font-semibold mb-6 w-full text-center shadow-md backdrop-blur-sm">
                "I spent 70$ at grocery store today morning and 30$ on wine now"
              </div>
              {/* Breakdown */}
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between bg-white/20 rounded-xl px-4 py-3 border border-green-900/10 shadow-sm">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">🛒</span>
                    <div>
                      <div className="text-gray-900 font-bold text-sm sm:text-base">Grocery Store</div>
                      <div className="text-gray-500 text-xs sm:text-sm">Food & Dining</div>
                    </div>
                  </div>
                  <div className="text-green-500 text-lg sm:text-xl font-bold">$70</div>
                </div>
                <div className="flex items-center justify-between bg-white/20 rounded-xl px-4 py-3 border border-green-900/10 shadow-sm">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">🍷</span>
                    <div>
                      <div className="text-gray-900 font-bold text-sm sm:text-base">Wine</div>
                      <div className="text-gray-500 text-xs sm:text-sm">Alcohol</div>
                    </div>
                  </div>
                  <div className="text-green-500 text-lg sm:text-xl font-bold">$30</div>
                </div>
              </div>
              {/* Total */}
              <div className="mt-5 bg-white/20 border border-green-700/40 rounded-xl px-4 py-3 flex items-center justify-between w-full shadow-sm">
                <div className="text-gray-900 font-bold text-sm sm:text-base">Total Spent</div>
                <div className="text-green-500 text-lg sm:text-xl font-bold">$100</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="max-w-screen-xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl">
            <span className="text-4xl mb-4">🎤</span>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Voice-to-text logging</h3>
            <p className="text-gray-700 text-sm font-medium">Add income and expenses by simply speaking. No typing required.</p>
          </div>
          <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl">
            <span className="text-4xl mb-4">🤖</span>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Smart AI</h3>
            <p className="text-gray-700 text-sm font-medium">Understands natural language and categorizes your transactions automatically.</p>
          </div>
          <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl">
            <span className="text-4xl mb-4">📊</span>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Income + Expense Tracking</h3>
            <p className="text-gray-700 text-sm font-medium">Track all your income and expenses in one place, hands-free.</p>
          </div>
          <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl">
            <span className="text-4xl mb-4">💡</span>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Personalized Insights</h3>
            <p className="text-gray-700 text-sm font-medium">Get smart, personalized budget insights and suggestions.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Waitlist Section */}
      <section id="waitlist" className="max-w-screen-sm mx-auto px-4 py-12 md:py-20">
        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-2xl p-10 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-center">Join the Waitlist</h2>
          <p className="text-gray-700 mb-6 text-center font-medium">Be the first to try Voca! <br/>Enter your email in the popup and we'll notify you when we launch.</p>
          <form className="w-full" onSubmit={e => {e.preventDefault(); open();}}>
            <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white px-6 py-4 rounded-full font-bold shadow hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all duration-200 text-lg">Notify Me</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}