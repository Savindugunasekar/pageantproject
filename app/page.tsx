import CandidateList from "@/components/CandidateList";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <CandidateList />
    </div>
  );
}
