'use client';
import { createContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WaitlistModal from "./components/WaitlistModal";

export const WaitlistModalContext = createContext({ open: () => {} });

export default function ClientLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Use useEffect to ensure we're fully client-side before any state changes
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <>
      <WaitlistModalContext.Provider value={{ open: () => setModalOpen(true) }}>
        <Navbar onWaitlistClick={() => setModalOpen(true)} />
        {mounted && <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />}
        <div className="pt-20">{children}</div>
      </WaitlistModalContext.Provider>
    </>
  );
} 