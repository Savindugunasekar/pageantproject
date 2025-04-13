
"use client"
import { useEffect, useState } from "react";
import axios from "axios";

interface Candidate {
  id: string;
  name: string;
  image: string;
}

const PodiumAndTop10 = () => {
  const [top10Candidates, setTop10Candidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchTopCandidates = async () => {
      try {
        const res = await axios.get("/api/fetchTopTen");
        console.log("Top 10 candidates:", res.data);
         // Adjust API route if needed
        setTop10Candidates(res.data); // Axios returns the response data directly
      } catch (error) {
        console.error("Error fetching top candidates:", error);
      }
    };

    fetchTopCandidates();
  }, []);
  return (
    <div
      className="min-h-screen w-full overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bluebg.svg')" }}
    >
      <div className="mx-20">
        <div className="flex flex-col items-center mt-24">
          {/* Top 3 Podium */}
          <div className="flex justify-center items-end gap-6 mb-12">
            {/* 2nd Place - Left */}
            <div className="w-1/4 h-64 relative flex flex-col justify-end items-center border-2 border-white/30 shadow-lg text-white backdrop-blur-lg rounded-3xl overflow-hidden">
              <img
                src={top10Candidates[1]?.image}
                alt={top10Candidates[1]?.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div
                className="absolute bottom-0 w-full group-hover:h-full h-2/5 p-6 flex flex-col justify-end items-center text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="relative z-20 text-center p-4">
                <h2 className="text-3xl font-bold">#2</h2>
                <p className="text-lg font-semibold">
                  {top10Candidates[1]?.name}
                </p>
                <p className="text-gray-300">
                  Contestant Id: {top10Candidates[1]?.id}
                </p>
              </div>
            </div>

            {/* 1st Place - Center */}
            <div className="w-1/3 h-72 relative flex flex-col justify-end items-center border-4 border-yellow-400 shadow-2xl text-white backdrop-blur-lg rounded-3xl overflow-hidden">
              <img
                src={top10Candidates[0]?.image}
                alt={top10Candidates[0]?.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* <div className="absolute inset-0 bg-black/10 z-10"></div> */}
              <div
                className="absolute bottom-0 w-full group-hover:h-full h-2/5 p-6 flex flex-col justify-end items-center text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="relative z-20 text-center p-4">
                <h2 className="text-4xl font-bold">#1</h2>
                <p className="text-lg font-semibold">
                  {top10Candidates[0]?.name}
                </p>
                <p className="text-gray-300">
                  Contestant Id: {top10Candidates[0]?.id}
                </p>
              </div>
            </div>

            {/* 3rd Place - Right */}
            <div className="w-1/4 h-64 relative flex flex-col justify-end items-center border-2 border-white/30 shadow-lg text-white backdrop-blur-lg rounded-3xl overflow-hidden">
              <img
                src={top10Candidates[2]?.image}
                alt={top10Candidates[2]?.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div
                className="absolute bottom-0 w-full group-hover:h-full h-2/5 p-6 flex flex-col justify-end items-center text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="relative z-20 text-center p-4">
                <h2 className="text-3xl font-bold">#3</h2>
                <p className="text-lg font-semibold">
                  {top10Candidates[2]?.name}
                </p>
                <p className="text-gray-300">
                  Contestant Id: {top10Candidates[2]?.id}
                </p>
              </div>
            </div>
          </div>

          {/* Top 4-10 List */}

          <div className="w-full max-w-4xl space-y-4 my-4">
            {top10Candidates.slice(3).map((candidate, index) => (
              <div
                key={candidate.id}
                className="flex items-center bg-white/20 backdrop-blur-lg text-white rounded-xl p-4 shadow-md border border-white/30"
              >
                <h2 className="text-xl font-bold w-12">#{index + 4}</h2>
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-16 h-16 rounded-xl mx-4"
                />
                <div>
                  <p className="text-lg font-semibold">{candidate.name}</p>
                  <p className="text-gray-800">Id: {candidate.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodiumAndTop10;
