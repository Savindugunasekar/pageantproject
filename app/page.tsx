"use client";

import CandidateList from "@/components/CandidateList";
import LandingPage from "@/components/LandingPage";
import Search from "@/components/Search";
import { AuroraBackground } from "@/components/ui/aurora-background"; 
import { useRef, useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null); // Ensure the correct type

  return (

      <div className="min-h-screen w-full overflow-hidden  bg-gradient-to-b from-white to-yellow-200">
        <LandingPage scrollToCandidate={() => searchInputRef.current?.scrollIntoView({ behavior: "smooth" })} />
        <Search ref={searchInputRef} setSearchTerm={setSearchTerm} />
        <CandidateList searchTerm={searchTerm} />
      </div>
  );
}
