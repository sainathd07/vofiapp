'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WaitlistModal from "./components/WaitlistModal";
import { createContext, useState } from "react";

export const WaitlistModalContext = createContext({ open: () => {} });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WaitlistModalContext.Provider value={{ open: () => setModalOpen(true) }}>
          <Navbar onWaitlistClick={() => setModalOpen(true)} />
          <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
          <div className="pt-20">{children}</div>
        </WaitlistModalContext.Provider>
      </body>
    </html>
  );
} 