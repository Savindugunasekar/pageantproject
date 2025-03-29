// // import { candidateList } from "@/public/assets/constants/candidates";
// // import CandidateCard from "./CandidateCard";
// // import Link from "next/link";
// // import { useState } from "react";
// // import { cn } from "@/app/lib/utils";
// // import { AnimatePresence, motion } from "framer-motion"; // Correct import

// // // Define types for the props
// // interface Candidate {
// //   id: number;
// //   name: string;
// //   image: string;
// //   age: number;
// // }

// // interface CandidateListProps {
// //   searchTerm: string;
// // }

// // const CandidateList: React.FC<CandidateListProps> = ({ searchTerm }) => {
// //   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
// //   const filteredCandidates = candidateList.filter((candidate) =>
// //     candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="w-full min-h-screen flex justify-center">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-[85%] justify-center items-center">
// //         {filteredCandidates.map((candidate) => (
// //           <Link
// //             href={`/contestants/${candidate.id}`}
// //             key={candidate.id}
// //             className="relative group block p-2 w-full h-fit justify-center items-center"
// //             onMouseEnter={() => setHoveredIndex(candidate.id)}
// //             onMouseLeave={() => setHoveredIndex(null)}
// //           >
// //             {/* Hover effect background */}
// //             <AnimatePresence>
// //               {hoveredIndex === candidate.id && (
// //                 <motion.span
// //                   key="hoverEffect"
// //                   className="absolute bg-[#EBB866] inset-0 w-full h-64 xl:h-68 block rounded-3xl"
// //                   layoutId="hoverBackground"
// //                   initial={{ opacity: 0 }}
// //                   animate={{
// //                     opacity: 1,
// //                     transition: { duration: 0.15 },
// //                   }}
// //                   exit={{
// //                     opacity: 0,
// //                     transition: { duration: 0.15, delay: 0.2 },
// //                   }}
// //                 />
// //               )}
// //             </AnimatePresence>

// //             <CandidateCard
// //               name={candidate.name}
// //               image={candidate.image}
// //               age={candidate.age}
// //               number={candidate.id}
// //             />
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CandidateList;
// import { candidateList } from "@/public/assets/constants/candidates";
// import CandidateCard from "./CandidateCard";
// import Link from "next/link";
// import { useState } from "react";
// import { cn } from "@/app/lib/utils";
// import { AnimatePresence, motion } from "framer-motion"; // Correct import

// // Define types for the props
// interface Candidate {
//   id: number;
//   name: string;
//   image: string;
//   age: number;
// }

// interface CandidateListProps {
//   searchTerm: string;
// }

// const CandidateList: React.FC<CandidateListProps> = ({ searchTerm }) => {
//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const filteredCandidates = candidateList.filter((candidate) =>
//     candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 w-full max-w-[85%] justify-items-center items-center">
//         {filteredCandidates.map((candidate) => (
//           <Link
//             href={`/contestants/${candidate.id}`}
//             key={candidate.id}
//             className="relative group block p-2 w-full h-fit  justify-center items-center"
//             onMouseEnter={() => setHoveredIndex(candidate.id)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {/* Hover effect background */}
//             <AnimatePresence>
//               {hoveredIndex === candidate.id && (
//                 <motion.span
//                   key="hoverEffect"
//                   className="absolute bg-[#EBB866] inset-0 w-full h-64 xl:h-68 block rounded-3xl"
//                   layoutId="hoverBackground"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     transition: { duration: 0.15 },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     transition: { duration: 0.15, delay: 0.2 },
//                   }}
//                 />
//               )}
//             </AnimatePresence>

//             <CandidateCard
//               name={candidate.name}
//               image={candidate.image}
//               age={candidate.age}
//               number={candidate.id}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CandidateList;
import { candidateList } from "@/public/assets/constants/candidates";
import CandidateCard from "./CandidateCard";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion"; // Correct import

// Define types for the props
interface Candidate {
  id: number;
  name: string;
  image: string;
  age: number;
}

interface CandidateListProps {
  searchTerm: string;
}

const CandidateList: React.FC<CandidateListProps> = ({ searchTerm }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const filteredCandidates = candidateList.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-[85%]">
        {filteredCandidates.map((candidate) => (
          <Link
            href={`/contestants/${candidate.id}`}
            key={candidate.id}
            className="relative group block p-2 w-full h-fit"
            onMouseEnter={() => setHoveredIndex(candidate.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover effect background */}
            <AnimatePresence>
              {hoveredIndex === candidate.id && (
                <motion.span
                  key="hoverEffect"
                  className="absolute bg-[#EBB866] inset-0 h-full w-full block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <CandidateCard
              name={candidate.name}
              image={candidate.image}
              age={candidate.age}
              number={candidate.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
