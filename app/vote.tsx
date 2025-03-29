"use client";

import CandidateList from "@/components/CandidateList";
import LandingPage from "@/components/LandingPage";
import Search from "@/components/Search";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useState } from "react";

export default function vote() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <AuroraBackground>
      <div className="min-h-screen w-full">hello</div>
    </AuroraBackground>
  );
}
