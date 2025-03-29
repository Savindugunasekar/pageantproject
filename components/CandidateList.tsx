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
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you're using a UI component library

interface Candidate {
  id: number;
  name: string;
  image: string;
  age: number;
}

interface CandidateListProps {
  searchTerm: string;
}

const ITEMS_PER_PAGE = 20;

const CandidateList: React.FC<CandidateListProps> = ({ searchTerm }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCandidates = candidateList.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCandidates.length / ITEMS_PER_PAGE);
  const displayedCandidates = filteredCandidates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full mb-20 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-[85%]">
        {displayedCandidates.map((candidate) => (
          <Link
            href={`/contestants/${candidate.id}`}
            key={candidate.id}
            className="relative group block p-2 w-full h-fit"
            onMouseEnter={() => setHoveredIndex(candidate.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === candidate.id && (
                <motion.span
                  key="hoverEffect"
                  className="absolute bg-[#EBB866] inset-0 h-full w-full block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
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

  
      {totalPages > 1 && (
        <div className="flex gap-4 mt-6">
          <Button
           className="bg-white border-yellow-500 border-2 text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition-all duration-200"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-lg font-medium text-yellow-500">Page {currentPage} of {totalPages}</span>
          <Button
           className="bg-white border-yellow-500 border-2 text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition-all duration-200"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default CandidateList;
