// "use client";

// import Footer from "@/components/Footer";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const ContestantPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-yellow-200  bg-fixed ">
//       <div className="flex justify-center pt-20">
//         {/* <div className="flex justify-center lg:w-1/2 items-center">
//           <Image
//             src="/Miss Sri Lanka 2025.png" // Replace with actual image path
//             alt="Contestant"
//             width={400}
//             height={500}
//             className="rounded-lg"
//           />
//         </div> */}
//       </div>
//       <div className=" flex justify-center items-center p-4 content-center">
//         <div className="max-w-6xl w-full p-6 lg:flex ">
//           <div className="flex justify-center items-center lg:w-1/2">
//             <Image
//               src="/contestant-image.jpg" // Replace with actual image path
//               alt="Contestant"
//               width={400}
//               height={500}
//               className="rounded-2xl"
//             />
//           </div>
//           <div className="lg:w-1/2 lg:pl-6 text-center lg:text-left mt-4">
//             {/* <div className="md:w-1/2 md:pl-6 text-center md:text-left mt-6 md:mt-0"> */}
//             <h1 className="text-4xl font-bold">Sophia Martinez</h1>
//             <p className="text-gray-600 font-semibold">
//               Contestant No: <span className="font-bold">#C102</span>
//             </p>
//             {/* <p className="text-lg font-bold mt-2">Age: 23</p>
//             <p className="text-gray-600">Height: 5'9" (175 cm)</p>
//             <p className="text-gray-600">Measurements: 34-24-36</p>
//             <p className="text-gray-600">Category: Miss Elegance</p> */}

//             <h2 className="mt-6 text-lg font-semibold text-yellow-600">
//               Select Your Package
//             </h2>
//             {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="bg-gradient-to-r from-black to-yellow-600 text-white rounded-4xl px-6 py-4  items-center shadow-lg ">
//                 <div className="text-left ">
//                   <p className="font-semibold text-sm">Gold Package</p>
//                   <p className="text-2xl font-bold">50 Votes</p>
//                 </div>
//                 <p className="text-xl text-right font-bold ">$50</p>
//               </div>
//               <div className="bg-gray-800 text-white rounded-lg p-4 flex-1 text-center">
//                 <p className="font-semibold md:text-left">Silver Package</p>
//                 <p className="text-xl font-bold md:text-left">20 Votes</p>
//                 <p className="text-lg font-bold md:text-right">$20</p>
//               </div>
//               <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-lg p-4 flex-1 text-center">
//                 <p className="font-semibold md:text-left">Brownse Package</p>
//                 <p className="text-xl font-bold md:text-left">10 Votes</p>
//                 <p className="text-lg font-bold md:text-right">$05</p>
//               </div>
//             </div> */}

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full items-center justify-center">
//               {/* Gold Package */}
//               <button className="relative bg-gradient-to-r from-black to-yellow-600 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
//                 <div className="relative z-10">
//                   <div className="flex flex-col text-left">
//                     <p className="font-semibold text-sm">Gold Package</p>
//                     <p className="text-3xl font-extrabold">1000 Votes</p>
//                   </div>
//                   <p className="text-2xl font-bold text-right">$275</p>
//                 </div>
//               </button>

//               {/* Silver Package */}
//               <button className="relative bg-gradient-to-r from-gray-900 to-gray-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
//                 <div className="relative z-10">
//                   <div className="flex flex-col text-left">
//                     <p className="font-semibold text-sm">Silver Package</p>
//                     <p className="text-3xl font-extrabold">500 Votes</p>
//                   </div>
//                   <p className="text-2xl font-bold text-right">$150</p>
//                 </div>
//               </button>

//               {/* Bronze Package */}
//               <button className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
//                 <div className="relative z-10">
//                   <div className="flex flex-col text-left">
//                     <p className="font-semibold text-sm">Bronze Package</p>
//                     <p className="text-3xl font-extrabold">200 Votes</p>
//                   </div>
//                   <p className="text-2xl font-bold text-right">$65</p>
//                 </div>
//               </button>

//               <button className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
//                 <div className="relative z-10">
//                   <div className="flex flex-col text-left">
//                     {/* <p className="font-semibold text-sm">Bronze Package</p> */}
//                     <p className="text-3xl font-extrabold">100 Votes</p>
//                   </div>
//                   <p className="text-2xl font-bold text-right">$35</p>
//                 </div>
//               </button>
//               <button className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
//                 <div className="relative z-10">
//                   <div className="flex flex-col text-left">
//                     {/* <p className="font-semibold text-sm">Bronze Package</p> */}
//                     <p className="text-3xl font-extrabold">50 Votes</p>
//                   </div>
//                   <p className="text-2xl font-bold text-right">$20</p>
//                 </div>
//               </button>
//               <button className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
//                 <div className="relative z-10">
//                   <div className="flex flex-col text-left">
//                     {/* <p className="font-semibold text-sm">Bronze Package</p> */}
//                     <p className="text-3xl font-extrabold">25 Votes</p>
//                   </div>
//                   <p className="text-2xl font-bold text-right">$10</p>
//                 </div>
//               </button>
//               <button className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
//                 <div className="relative z-10">
//                   <div className="flex flex-col text-left">
//                     {/* <p className="font-semibold text-sm">Bronze Package</p> */}
//                     <p className="text-3xl font-extrabold">10 Votes</p>
//                   </div>
//                   <p className="text-2xl font-bold text-right">$5</p>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContestantPage;
"use client"; // Mark as a Client Component since we're using hooks

import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams for dynamic route params
import { candidateList } from "@/public/assets/constants/candidates"; // Import candidate data

// Define the Candidate interface (matching your updated data structure)
interface Candidate {
  id: number;
  name: string;
  image: string;
  image2: string; // Add image2 to the interface
}

const ContestantPage = () => {
  const { id } = useParams(); // Get the contestant ID from the URL params
  const [contestant, setContestant] = useState<Candidate | null>(null);

  // Fetch contestant data based on the ID when the component mounts
  useEffect(() => {
    if (id) {
      const contestantData = candidateList.find(
        (candidate) => candidate.id === Number(id)
      );
      setContestant(contestantData || null);
    }
  }, [id]);

  // If contestant data is not yet loaded or not found, show a loading/fallback state
  if (!contestant) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading contestant data...</p>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-gradient-to-b from-white to-yellow-200 bg-fixed">
    <div
      className="min-h-screen w-full overflow-hidden bg-cover bg-center  bg-fixed"
      style={{ backgroundImage: "url('/bluebg.svg')" }}
    >
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
              {/* Gold Package */}
              <button className="relative bg-gradient-to-r from-black to-yellow-600 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold">1000 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right">$275</p>
                </div>
              </button>

              {/* Silver Package */}
              <button className="relative bg-gradient-to-r from-gray-900 to-gray-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold">500 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right">$150</p>
                </div>
              </button>

              {/* Bronze Package */}
              <button className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-extrabold">200 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right ">$65</p>
                </div>
              </button>

              {/* Additional Packages */}
              <button className="relative bg-white/50 hover:bg-white/70 text-blue-100 group-hover:text-blue-300 border border-white group-hover:border-blue-400 rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group backdrop-blur-md">
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
              <button className="relative bg-white/50 hover:bg-white/70 text-blue-100 group-hover:text-blue-300 border border-white group-hover:border-blue-400 rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group backdrop-blur-md">
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
              <button className="relative bg-white/50 hover:bg-white/70 text-blue-100 group-hover:text-blue-300 border border-white group-hover:border-blue-400 rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group backdrop-blur-md">
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
              <button className="relative bg-white/50 hover:bg-white/70 text-blue-100 group-hover:text-blue-300 border border-white group-hover:border-blue-400 rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group backdrop-blur-md">
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
