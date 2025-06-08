'use client';
import { useContext } from 'react';
import { WaitlistModalContext } from '../ClientLayout';

export default function PricingSection() {
  const { open } = useContext(WaitlistModalContext);
  
  return (
    <section id="pricing" className="relative z-10 max-w-screen-xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Choose the plan that works best for you and experience the power of voice-first budgeting.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Monthly Plan */}
        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-xl p-8 flex flex-col h-full transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Monthly</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-extrabold text-green-700">$4.99</span>
              <span className="text-gray-600 mb-1">/month</span>
            </div>
            <p className="text-gray-600 text-sm">Perfect for trying the premium experience</p>
          </div>
          
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Unlimited voice transactions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Advanced AI processing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Complete analytics dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Data export (CSV, PDF)</span>
            </li>
          </ul>
          
          <button 
            onClick={open}
            className="mt-auto w-full bg-white text-green-700 border-2 border-green-600 px-6 py-3 rounded-full font-bold shadow hover:bg-green-50 transition-all duration-200"
          >
            Try Free for 14 Days
          </button>
        </div>
        
        {/* Yearly Plan - Featured */}
        <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-600 shadow-2xl p-8 flex flex-col h-full transform scale-105 relative">
          <div className="absolute -top-4 left-0 right-0 flex justify-center">
            <span className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              MOST POPULAR
            </span>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Yearly</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-extrabold text-green-700">$49.99</span>
              <span className="text-gray-600 mb-1">/year</span>
            </div>
            <p className="text-gray-600 text-sm">Best value (save 17%)</p>
          </div>
          
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Unlimited voice transactions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Advanced AI processing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Complete analytics dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Data export (CSV, PDF)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700 font-medium">Priority customer support</span>
            </li>
          </ul>
          
          <button 
            onClick={open}
            className="mt-auto w-full bg-gradient-to-r from-green-600 to-green-400 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all duration-200"
          >
            Try Free for 14 Days
          </button>
        </div>
        
        {/* Lifetime Plan */}
        <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-green-200 shadow-xl p-8 flex flex-col h-full transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Lifetime</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-extrabold text-green-700">$149.99</span>
              <span className="text-gray-600 mb-1">/once</span>
            </div>
            <p className="text-gray-600 text-sm">One-time purchase, lifetime access</p>
          </div>
          
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Unlimited voice transactions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Advanced AI processing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Complete analytics dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700">Data export (CSV, PDF)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700 font-medium">VIP customer support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-gray-700 font-medium">All future feature updates</span>
            </li>
          </ul>
          
          <button 
            onClick={open}
            className="mt-auto w-full bg-white text-green-700 border-2 border-green-600 px-6 py-3 rounded-full font-bold shadow hover:bg-green-50 transition-all duration-200"
          >
            Get Lifetime Access
          </button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          All plans include a 14-day free trial. No credit card required to start.
          <br />
          See our <a href="/refund-policy" className="text-green-700 font-medium hover:underline">Refund Policy</a> for more details.
        </p>
      </div>
    </section>
  );
} 