import { candidateList } from "@/public/assets/constants/candidates";
import CandidateCard from "./CandidateCard";

const CandidateList = () => {
  
   
      return (
        <div className=" w-full min-h-screen flex justify-center items-center p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
            {candidateList.map((candidate) => (
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
