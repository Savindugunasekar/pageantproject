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
    
  },[])

  return (
    <div className="relative w-full h-screen overflow-hidden">
    {/* Background Video */}
    <video 
      className="absolute top-0 left-0 w-full h-full object-cover" 
      autoPlay 
      loop 
      muted 
      playsInline
    >
      <source src="/assets/videos/intro.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay & Animated Title */}
    <div className="absolute inset-0 flex justify-center items-center">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0, filter: "blur(15px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="text-6xl font-serif font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 
                   drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]"
      >
        👑 Miss World 2025 👑
      </motion.h1>
    </div>
  </div>
  );
}
