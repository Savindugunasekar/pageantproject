"use client";

import CandidateList from "@/components/CandidateList";
import LandingPage from "@/components/LandingPage";
import Search from "@/components/Search";
import { AuroraBackground } from "@/components/ui/aurora-background"; 
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <AuroraBackground>
      <div className="min-h-screen w-full overflow-hidden">
        <LandingPage />
        <Search setSearchTerm={setSearchTerm} />
        <CandidateList searchTerm={searchTerm} />
      </div>
    </AuroraBackground>
  );
}
