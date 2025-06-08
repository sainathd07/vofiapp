'use client';
import { useState, useEffect, useRef } from 'react';

export default function WaitlistModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef(null);
  
  // Get Tally form URL from environment variable or use default
  const tallyFormUrl = process.env.NEXT_PUBLIC_TALLY_FORM_URL || 'https://tally.so/embed/mRDkEn';
  const fullTallyUrl = `${tallyFormUrl}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  
  useEffect(() => {
    setMounted(true);
    
    // Load Tally script only on client-side
    if (typeof window !== 'undefined') {
      // Check if script already exists
      if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        script.onload = () => {
          // Initialize Tally when script loads if modal is open
          if (open && window.Tally) {
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    }
  }, [open]);
  
  // Initialize Tally when modal opens
  useEffect(() => {
    if (open && mounted && typeof window !== 'undefined') {
      // Try to initialize after a short delay to ensure the script has loaded
      const timer = setTimeout(() => {
        if (window.Tally) {
          window.Tally.loadEmbeds();
          setIframeLoaded(true);
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [open, mounted]);
  
  // Reset iframe loaded state when modal closes
  useEffect(() => {
    if (!open) {
      setIframeLoaded(false);
    }
  }, [open]);
  
  // Only render content after client-side hydration
  if (!mounted || !open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-6 overflow-hidden animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-green-700 text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        {!iframeLoaded && (
          <div className="flex items-center justify-center h-[500px]">
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <div className={`h-[500px] ${!iframeLoaded ? 'hidden' : ''}`}>
          <iframe
            ref={iframeRef}
            data-tally-src={fullTallyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Voca Waitlist Form"
            onLoad={() => setIframeLoaded(true)}
            style={{
              maxWidth: '100%',
              borderRadius: '8px'
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
} 