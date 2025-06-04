'use client';
import React from 'react';

const tallyUrl = process.env.NEXT_PUBLIC_TALLY_URL;

export default function WaitlistModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-0 overflow-hidden animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-green-700 text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <iframe
          src={tallyUrl}
          title="Join the Waitlist"
          className="w-full h-[500px] border-0 rounded-b-2xl"
          allowFullScreen
        />
      </div>
    </div>
  );
} 