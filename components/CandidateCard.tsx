// // import React from "react";
// // import { cn } from "@/app/lib/utils";
// // import Image, { StaticImageData } from "next/image";

// // interface CandidateProps {
// //   name: string;
// //   image: StaticImageData;
// //   age: number;
// //   number: number;
// // }

// // const CandidateCard: React.FC<CandidateProps> = ({
// //   name,
// //   image,
// //   age,
// //   number,
// // }) => {
// //   return (
// //     <div
// //       className={cn(
// //         "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group relative z-20"
// //       )}
// //     >
// //       <div className="relative z-50">
// //         {/* Candidate Number */}
// //         <div className="absolute top-2 left-2 bg-white bg-opacity-30 backdrop-blur-md text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-white">
// //           {number}
// //         </div>

// //         {/* Candidate Image */}
// //         <Image
// //           src={image}
// //           alt={name}
// //           className="object-cover w-full md:h-72  xl:h-96 rounded-t-2xl"
// //         />

// //         {/* Gradient Overlay & Info */}
// //         <div
// //           className="absolute bottom-0 w-full p-4 flex flex-col items-center text-white"
// //           style={{
// //             background:
// //               "linear-gradient(to top, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0) 90%)",
// //           }}
// //         >
// //           {/* Name and Age with transition */}
// //           <div className="relative self-start text-left">
// //             <h1 className="text-3xl md:text-xl font-bold">{name}</h1>
// //             <p className="text-xl md:text-sm">Age: {age}</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CandidateCard;
// import React from "react";
// import Image, { StaticImageData } from "next/image";

// interface CandidateProps {
//   name: string;
//   image: StaticImageData;
//   age: number;
//   number: number;
// }
// const CandidateCard: React.FC<CandidateProps> = ({ name, image }) => {
//   return (
//     <div className="relative lg:w-full w-48 h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-pink-300 to-grey-800 shadow-lg">
//       {/* Candidate Image */}
//       <div className="absolute top-0 left-0 w-full h-3/5">
//         <Image
//           src={image}
//           alt={name}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-t-2xl"
//         />
//       </div>

//       {/* Gradient Overlay & Info */}
//       <div className="absolute bottom-0 w-full h-2/5 p-4 flex flex-col items-center text-white bg-gradient-to-t from-black via-black/80 to-transparent">
//         <p className="text-xs">Click here to vote for</p>
//         <h1 className="text-lg font-bold">{name}</h1>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { cn } from "@/app/lib/utils";
import Image, { StaticImageData } from "next/image";

interface CandidateProps {
  name: string;
  image: StaticImageData;
  number: number;
  age: number;
}

const CandidateCard: React.FC<CandidateProps> = ({ name, image, number }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group relative z-20 transition-all duration-300 group-hover:backdrop-blur-lg"
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
          className="object-cover w-full md:h-72 xl:h-72 rounded-t-2xl"
        />

        {/* Gradient Overlay & Info */}
        <div
          className="absolute bottom-0 w-full group-hover:h-full h-2/5 p-6 flex flex-col justify-end items-center text-white transition-all duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Name and Click to Vote */}
          <div className="relative text-center transition-all duration-300 group-hover:translate-y-[-5px]">
            <h1 className="text-3xl md:text-xl font-bold mb-2">{name}</h1>
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
