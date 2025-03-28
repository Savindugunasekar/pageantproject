"use client";

import CandidateList from "@/components/CandidateList";
import LandingPage from "@/components/LandingPage";
import { AuroraBackground } from "@/components/ui/aurora-background"; 

export default function Home() {
  return (
    <AuroraBackground>
      <div className="min-h-screen w-full">
        <LandingPage />
        <CandidateList />
      </div>
    </AuroraBackground>
  );
}
