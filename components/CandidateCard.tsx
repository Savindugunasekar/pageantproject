// export default CandidateCard;
import React from "react";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

interface CandidateProps {
  name: string;
  image: string;
  number: number;
  age?: number;
}

const CandidateCard: React.FC<CandidateProps> = ({ name, image, number }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group relative z-20 transition-all duration-300 group-hover:backdrop-blur-lg"
      )}
    >
      <div className="relative z-50">
        <div className="absolute top-2 left-2 bg-white bg-opacity-30 backdrop-blur-md text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-white z-50">
          {number}
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-72 xl:h-80">
          {" "}
          {/* Adjusted heights */}
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw" // Match grid columns
            className="object-cover rounded-t-2xl"
            loading="lazy"
          />
        </div>
        <div
          className="absolute bottom-0 w-full group-hover:h-full h-2/5 p-6 flex flex-col justify-end items-center text-white transition-all duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div className="relative text-center transition-all duration-300 group-hover:translate-y-[-5px]">
            <h1 className="text-2xl sm:text-3xl md:text-xl font-bold mb-2">
              {name}
            </h1>
            <span className="hidden group-hover:block text-sm text-gray-300 font-bold mt-2">
              Click to Vote →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
