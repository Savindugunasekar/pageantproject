"use client";
import { motion } from "framer-motion";


const LandingPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Background Video */}
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
        <source src="../assets/videos/intro.webm" type="video/webm" />
      </motion.video>

      {/* Header Image */}
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

      {/* Vote Button */}
      <motion.button
        className="absolute bottom-56 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-slate-400 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:scale-110 transition-all hover:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }} // Delay for appearing after the header
      >
        Vote Below
      </motion.button>
    </div>
  );
};

export default LandingPage;
