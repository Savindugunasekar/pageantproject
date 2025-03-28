import React from "react";
import Image, { StaticImageData } from "next/image";

interface CandidateProps {
  name: string;
  image: StaticImageData;
  age: number;
  number: number;
}

const CandidateCard: React.FC<CandidateProps> = ({ name, image, age, number }) => {
  return (
    <div className="shadow-lg relative flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden bg-white h-96">
      {/* Number Badge with Glass Effect */}
      <div className="absolute top-2 left-2 bg-white bg-opacity-30 backdrop-blur-md text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-white">
        {number}
      </div>
      
      {/* Candidate Image */}
      <Image
        src={image}
        alt={name}
       
        className="object-cover w-full h-80 rounded-t-2xl w-full h-full"
      />
      
      {/* Gradient Overlay & Info */}
      <div className="absolute bottom-0 w-full p-4 flex flex-col items-center text-white" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0) 90%)' }}>
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm">Age: {age}</p>
      </div>
    </div>
  );
};

export default CandidateCard;