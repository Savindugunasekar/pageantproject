"use client";

import CandidateList from "@/components/CandidateList";
import LandingPage from "@/components/LandingPage";
import Search from "@/components/Search";
import { useRef, useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null); // Ensure the correct type

  return (
    <>
      <LandingPage
        scrollToCandidate={() =>
          searchInputRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <div
        className="min-h-screen w-full overflow-hidden bg-cover bg-center  bg-fixed"
        style={{ backgroundImage: "url('/Angelina Jolie.svg')" }}
      >
        <Search ref={searchInputRef} setSearchTerm={setSearchTerm} />

        <CandidateList searchTerm={searchTerm} />
      </div>
    </>
  );
}
