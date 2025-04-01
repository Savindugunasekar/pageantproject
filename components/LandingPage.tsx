// "use client";
// import { motion } from "framer-motion";

// const LandingPage = ({
//   scrollToCandidate,
// }: {
//   scrollToCandidate: () => void;
// }) => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
//       {/* Background Overlay */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full bg-black"
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 0.3 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       />

//       {/* Background Video */}

//       <motion.video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         initial={{ filter: "brightness(30%)" }}
//         animate={{ filter: "brightness(100%)" }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       >
//         <source src="../assets/videos/intro2.mp4" type="video/mp4" />
//       </motion.video>

//       {/* Header Container */}
//       <div className="absolute flex flex-col text-center md:text-left md:items-start md:left-16">
//         <motion.svg
//           width="800"
//           height="200"
//           viewBox="0 0 600 200"
//           xmlns="http://www.w3.org/2000/svg"
//           initial={{ scale: 0.8, opacity: 0, filter: "blur(15px)" }}
//           animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
//           transition={{ duration: 2, ease: "easeOut" }}
//         >
//           <defs>
//             <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop
//                 offset="0%"
//                 style={{ stopColor: "#FFD700", stopOpacity: 1 }}
//               />
//               <stop
//                 offset="50%"
//                 style={{ stopColor: "#FFA500", stopOpacity: 1 }}
//               />
//               <stop
//                 offset="100%"
//                 style={{ stopColor: "#FFD700", stopOpacity: 1 }}
//               />
//             </linearGradient>
//             <filter id="goldShine" x="-20%" y="-20%" width="140%" height="140%">
//               <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
//               <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
//               <feMerge>
//                 <feMergeNode in="offsetBlur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>
//           <text
//             x="50"
//             y="130"
//             fontFamily="Arial, sans-serif"
//             fontSize="60"
//             fontWeight="bold"
//             fill="url(#goldGradient)"
//             filter="url(#goldShine)"
//           >
//             Miss SriLanka 2025
//           </text>
//         </motion.svg>

//         {/* Vote Button */}
//         <motion.button
//           onClick={scrollToCandidate}
//           className="mt-6 md:mx-36 w-[60%] self-center  px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-lg bg-white/10 border border-yellow-400 shadow-lg text-yellow-300 transition-all duration-300 hover:bg-white/20 hover:text-yellow-400 md:self-start"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 2, ease: "easeOut" }}
//         >
//           Vote Below
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LandingPage = ({
  scrollToCandidate,
}: {
  scrollToCandidate: () => void;
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Header */}

      {/* Background Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black hidd"
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
        <source src="../assets/videos/intro2.mp4" type="video/mp4" />
      </motion.video>

      {/* Gradient Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-transparent to-transparent" /> */}

      {/* PNG Image Overlay */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/overlay-blue.png")', // Replace with your image path
        }}
      /> */}

      {/* Header Container */}
      {/* <div className="absolute w-full h-full flex flex-col items-center justify-end ">
       
        <motion.div
          className="relative w-full h-auto max-w-4xl" // Increased max width
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/logo2.png"
            alt="Miss Sri Lanka 2025"
            width={1920} // Increased width
            height={1080} // Increased height proportionally
            className="lg:w-[80%] w-full h-full"
            priority // Ensures logo loads quickly
          />
        </motion.div>

        
        <div className="pb-20">
          <motion.button
            onClick={scrollToCandidate}
            className="px-10 py-4 text-xl font-semibold rounded-lg bg-white/10 backdrop-blur-md border-2 border-yellow-400 shadow-lg text-yellow-300 transition-all duration-300 hover:bg-white/20 hover:text-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Vote Below
          </motion.button>
        </div> */}
      {/* </div> */}
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pb-20">
        {/* Logo */}
        {/* <motion.div
          className="w-full max-w-2xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/logo.png"
            alt="Miss Universe Sri Lanka 2025"
            width={2000}
            height={800}
            className="w-full h-auto scale-210 transform pb-15" // Added scale-110 to stretch it by 10%
            style={{ objectFit: "contain", objectPosition: "center" }} // Added for better control
            priority
          />
        </motion.div> */}
        {/* Vote Button */}
        <motion.button
          onClick={scrollToCandidate}
          className="mt-8 lg:mt-12 px-12 py-4 text-xl lg:text-2xl font-semibold rounded-full bg-white/10 backdrop-blur-md border-2 border-white shadow-lg text-white transition-all duration-300 hover:bg-white/20 hover:text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Vote Below
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
