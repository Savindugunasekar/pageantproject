"use client"
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    async function fetchTestData() {
      const response = await fetch('/api/testfetch');
      const data = await response.json();
      console.log('Fetched data:', data);
    }

    fetchTestData();
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video with Darker Start and Gradual Lightening */}
      <div className="absolute top-0 left-0 w-full h-full bg-black" />
      <motion.video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
        initial={{ filter: "brightness(30%)" }}
        animate={{ filter: "brightness(100%)" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <source src="/assets/videos/intro.webm" type="video/webm" />
      </motion.video>

      {/* Overlay & Animated Title */}
      <div className="absolute inset-0 flex justify-center items-center">
      <motion.img
  initial={{ scale: 0.8, opacity: 0, filter: "blur(15px)" }}
  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 2, ease: "easeOut" }}
  src="/assets/images/header.png"
  alt="Miss World 2025"
  className="drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]"
/>

      </div>
    </div>
  );
}