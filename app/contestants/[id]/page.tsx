// export default ContestantPage;
"use client"; // Mark as a Client Component since we're using hooks
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams for dynamic route params

import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";
import PaymentHandler from "@/components/PaymentHandler";
import axios from "axios";
import { motion } from "framer-motion";

const loadingText = "Loading contestant data...";

// Define the Candidate interface (matching your updated data structure)
interface Candidate {
  id: number;
  name: string;
  image: string;
  image2: string; // Add image2 to the interface
}

const ContestantPage = () => {
  const { handlePayment } = PaymentHandler();
  const { id } = useParams(); // Get the contestant ID from the URL params
  const [contestant, setContestant] = useState<Candidate | null>(null);

  // Fetch contestant data based on the ID when the component mounts
  useEffect(() => {
    if (id) {
      const fetchContestant = async () => {
        try {
          const response = await axios.post("/api/fetchSingleContestant", {
            id,
          });
          setContestant(response.data); // Update state with fetched data
        } catch (error) {
          console.error("Error fetching contestant:", error);
        }
      };

      fetchContestant();
    }
  }, [id]);

  // If contestant data is not yet loaded or not found, show a loading/fallback state
  if (!contestant) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img
          src="/loading.gif" // Replace this with your own GIF URL or local file path
          alt="Loading..."
          className="w-80 h-80 mb-4"
        />
        {/* <p>Loading contestant data...</p> */}
        <div className="flex justify-center items-center h-16">
          {loadingText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="mr-1 text-lg font-medium text-blue-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-gradient-to-b from-white to-yellow-200 bg-fixed">
    <div
      className="min-h-screen w-full overflow-hidden bg-cover bg-center  bg-fixed"
      style={{ backgroundImage: "url('/bluebg.svg')" }}
    >
      <Script
        type="text/javascript"
        src="https://www.payhere.lk/lib/payhere.js"
        strategy="afterInteractive"
      />
      <div className="flex justify-center pt-20">
        {/* You can optionally add a header image here if needed */}
      </div>
      <div className="flex justify-center items-center p-4 content-center">
        <div className="max-w-6xl w-full p-6 lg:flex">
          <div className="flex justify-center items-center lg:w-1/2">
            <Image
              src={contestant.image2} // Use image2 from contestant data
              alt={contestant.name}
              width={400}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-6 text-center lg:text-left mt-4 bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-lg">
            <h1 className="text-4xl font-bold">{contestant.name}</h1>
            <p className="text-gray-600 font-semibold">
              Contestant No: <span className="font-bold">#{contestant.id}</span>
            </p>

            <h2 className="mt-6 text-lg font-semibold text-yellow-600">
              Select Your Package
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full items-center justify-center">
              <button
                onClick={() => handlePayment(contestant.id, "$275", 1000, 275)}
                className="relative bg-gradient-to-r from-black to-yellow-600 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold">1000 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right">$275</p>
                </div>
              </button>

              <button
                onClick={() => handlePayment(contestant.id, "$150", 500, 150)}
                className="relative bg-gradient-to-r from-gray-900 to-gray-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold">500 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right">$150</p>
                </div>
              </button>

              <button
                onClick={() => handlePayment(contestant.id, "$65", 200, 65)}
                className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold">200 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right ">$65</p>
                </div>
              </button>

              {/* Additional Packages */}
              <button
                onClick={() => handlePayment(contestant.id, "$35", 100, 35)}
                className="relative bg-white/50 hover:bg-white/70 text-blue-100 group-hover:text-blue-300 border border-white group-hover:border-blue-400 rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold text-gray-700 ">
                      100 Votes
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-right  text-gray-700">
                    $35
                  </p>
                </div>
              </button>
              <button
                onClick={() => handlePayment(contestant.id, "$20", 50, 20)}
                className="relative bg-white/50 hover:bg-white/70 text-blue-100 group-hover:text-blue-300 border border-white group-hover:border-blue-400 rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold text-gray-700">
                      50 Votes
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-right  text-gray-700">
                    $20
                  </p>
                </div>
              </button>
              <button
                onClick={() => handlePayment(contestant.id, "$10", 25, 10)}
                className="relative bg-white/50 hover:bg-white/70 text-blue-100 group-hover:text-blue-300 border border-white group-hover:border-blue-400 rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold text-gray-700">
                      25 Votes
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-right  text-gray-700">
                    $10
                  </p>
                </div>
              </button>
              <button
                onClick={() => handlePayment(contestant.id, "$5", 10, 5)}
                className="relative bg-white/50 hover:bg-white/70 text-blue-100 group-hover:text-blue-300 border border-white group-hover:border-blue-400 rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold text-gray-700">
                      10 Votes
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-right text-gray-700">
                    $5
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContestantPage;
