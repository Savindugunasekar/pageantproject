import { candidateList } from "@/public/assets/constants/candidates";
import CandidateCard from "./CandidateCard";

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
  const filteredCandidates = candidateList.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen flex justify-center  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[90%]">
        {filteredCandidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            name={candidate.name}
            image={candidate.image}
            age={candidate.age}
            number={candidate.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
