import React from "react";
import { cn } from "@/app/lib/utils";
import Image, { StaticImageData } from "next/image";

interface CandidateProps {
  name: string;
  image: StaticImageData;
  age: number;
  number: number;
}

const CandidateCard: React.FC<CandidateProps> = ({ name, image, age, number }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group relative z-20"
      )}
    >
      <div className="relative z-50">
        {/* Candidate Number */}
        <div className="absolute top-2 left-2 bg-white bg-opacity-30 backdrop-blur-md text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-white">
          {number}
        </div>

        {/* Candidate Image */}
        <Image
          src={image}
          alt={name}
          className="object-cover w-full md:h-72  xl:h-96 rounded-t-2xl"
        />

        {/* Gradient Overlay & Info */}
        <div
          className="absolute bottom-0 w-full p-4 flex flex-col items-center text-white"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0) 90%)",
          }}
        >
          {/* Name and Age with transition */}
          <div className="relative text-left  translate-y-[50px] group-hover:translate-y-[-20px] transition-all duration-300 ease-in-out">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-xl">Age: {age}</p>
          </div>

          {/* Vote Now Button */}
          <button
            className="mt-2 px-6 py-2 text-white bg-gold rounded-full transition-all duration-300 ease-in-out translate-y-[100px] group-hover:translate-y-0"
            style={{ backgroundColor: "#FFD700" }}
          >
            Vote Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
