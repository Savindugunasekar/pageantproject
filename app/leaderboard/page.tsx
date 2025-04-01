// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "../../components/ui/table";
// //import msworld from "../../public/contestant-image-cropped.png";
// import Image from "next/image";

// const mockData = [
//   {
//     id: 1,
//     image: msworld,
//     name: "Emma Johnson",
//     category: "Miss Elegance",
//     votes: 320,
//     moneySpent: 1500,
//   },
//   {
//     id: 2,
//     image: msworld,
//     name: "Sophia Lee",
//     category: "Miss Charm",
//     votes: 280,
//     moneySpent: 1300,
//   },
//   {
//     id: 3,
//     image: msworld,
//     name: "Isabella Martinez",
//     category: "Miss Talent",
//     votes: 250,
//     moneySpent: 1100,
//   },
//   {
//     id: 4,
//     image: msworld,
//     name: "Olivia Davis",
//     category: "Miss Beauty",
//     votes: 350,
//     moneySpent: 1600,
//   },
//   {
//     id: 5,
//     image: msworld,
//     name: "Ava Garcia",
//     category: "Miss Personality",
//     votes: 400,
//     moneySpent: 1700,
//   },
//   {
//     id: 6,
//     image: msworld,
//     name: "Mia Rodriguez",
//     category: "Miss Elegance",
//     votes: 310,
//     moneySpent: 1550,
//   },
//   {
//     id: 7,
//     image: msworld,
//     name: "Amelia Perez",
//     category: "Miss Charm",
//     votes: 290,
//     moneySpent: 1450,
//   },
//   {
//     id: 8,
//     image: msworld,
//     name: "Harper Wilson",
//     category: "Miss Talent",
//     votes: 240,
//     moneySpent: 1000,
//   },
//   {
//     id: 9,
//     image: msworld,
//     name: "Evelyn Anderson",
//     category: "Miss Beauty",
//     votes: 330,
//     moneySpent: 1450,
//   },
//   {
//     id: 10,
//     image: msworld,
//     name: "Abigail Thomas",
//     category: "Miss Personality",
//     votes: 370,
//     moneySpent: 1650,
//   },
//   {
//     id: 11,
//     image: msworld,
//     name: "Ella Jackson",
//     category: "Miss Elegance",
//     votes: 310,
//     moneySpent: 1400,
//   },
//   {
//     id: 12,
//     image: msworld,
//     name: "Scarlett White",
//     category: "Miss Charm",
//     votes: 260,
//     moneySpent: 1200,
//   },
//   {
//     id: 13,
//     image: msworld,
//     name: "Sofia Harris",
//     category: "Miss Talent",
//     votes: 230,
//     moneySpent: 900,
//   },
//   {
//     id: 14,
//     image: msworld,
//     name: "Chloe Martin",
//     category: "Miss Beauty",
//     votes: 340,
//     moneySpent: 1500,
//   },
//   {
//     id: 15,
//     image: msworld,
//     name: "Layla Thompson",
//     category: "Miss Personality",
//     votes: 360,
//     moneySpent: 1600,
//   },
//   {
//     id: 16,
//     image: msworld,
//     name: "Lily Garcia",
//     category: "Miss Elegance",
//     votes: 310,
//     moneySpent: 1400,
//   },
//   {
//     id: 17,
//     image: msworld,
//     name: "Aria Martinez",
//     category: "Miss Charm",
//     votes: 280,
//     moneySpent: 1300,
//   },
//   {
//     id: 18,
//     image: msworld,
//     name: "Zoe Robinson",
//     category: "Miss Talent",
//     votes: 220,
//     moneySpent: 850,
//   },
//   {
//     id: 19,
//     image: msworld,
//     name: "Stella Clark",
//     category: "Miss Beauty",
//     votes: 330,
//     moneySpent: 1550,
//   },
//   {
//     id: 20,
//     image: msworld,
//     name: "Maya Lewis",
//     category: "Miss Personality",
//     votes: 380,
//     moneySpent: 1700,
//   },
// ];

// const PageantLeaderboard = () => {
//   return (
//     <>
{
  /* <div className="min-h-screen w-full bg-gradient-to-b from-white to-yellow-200 px-6 flex justify-center">
        <div className="w-full lg:max-w-[85%] my-36">
          <Table className="bg-white shadow-lg rounded-2xl overflow-hidden mb-10">
            <TableHeader>
              <TableRow className="bg-yellow-500 text-white text-lg">
                <TableHead className="text-center">Position</TableHead>
                <TableHead className="text-center">Image</TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Category</TableHead>
                <TableHead className="text-center">Votes</TableHead>
                <TableHead className="text-center">Money Spent ($)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((contestant, index) => (
                <TableRow
                  key={contestant.id}
                  className="border-b hover:bg-gray-200 transition-all duration-200"
                >
                  {/* Position Column */
}
{
  /* <TableCell className="font-semibold  text-lg lg:text-xl text-center">
                    <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">
                      {index + 1}
                    </span>
                  </TableCell>
                  <TableCell className="flex justify-center items-center">
                    <Image
                      src={contestant.image}
                      alt={contestant.name}
                      className="rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-semibold text-lg lg:text-xl text-center">
                    {contestant.name}
                  </TableCell>
                  <TableCell className="text-lg lg:text-xl text-center">
                    {contestant.category}
                  </TableCell>
                  <TableCell className="text-center text-lg lg:text-xl">
                    {contestant.votes}
                  </TableCell>
                  <TableCell className="text-center text-lg lg:text-xl">
                    ${contestant.moneySpent}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>  */
}
import { candidateList } from "@/public/assets/constants/candidates";

// Mocked Top 10 Candidate IDs (Replace this with real data when available)
const top10Ids = [2, 5, 8, 9, 3, 4, 1, 15, 20, 11];

// Get top 10 candidates from the candidateList
const top10Candidates = candidateList
  .filter((candidate) => top10Ids.includes(candidate.id))
  .slice(0, 10); // Ensure only 10 candidates

const PodiumAndTop10 = () => {
  return (
    <div
      className="min-h-screen w-full overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bluebg.svg')" }}
    >
      <div className="mx-20">
        <div className="flex flex-col items-center mt-24">
          {/* Top 3 Podium */}
          <div className="flex justify-center items-end gap-6 mb-12">
            {/* 2nd Place - Left */}
            <div className="w-1/4 h-64 relative flex flex-col justify-end items-center border-2 border-white/30 shadow-lg text-white backdrop-blur-lg rounded-3xl overflow-hidden">
              <img
                src={top10Candidates[1]?.image}
                alt={top10Candidates[1]?.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div
                className="absolute bottom-0 w-full group-hover:h-full h-2/5 p-6 flex flex-col justify-end items-center text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="relative z-20 text-center p-4">
                <h2 className="text-3xl font-bold">#2</h2>
                <p className="text-lg font-semibold">
                  {top10Candidates[1]?.name}
                </p>
                <p className="text-gray-300">
                  Contestant Id: {top10Candidates[1]?.id}
                </p>
              </div>
            </div>

            {/* 1st Place - Center */}
            <div className="w-1/3 h-72 relative flex flex-col justify-end items-center border-4 border-yellow-400 shadow-2xl text-white backdrop-blur-lg rounded-3xl overflow-hidden">
              <img
                src={top10Candidates[0]?.image}
                alt={top10Candidates[0]?.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* <div className="absolute inset-0 bg-black/10 z-10"></div> */}
              <div
                className="absolute bottom-0 w-full group-hover:h-full h-2/5 p-6 flex flex-col justify-end items-center text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="relative z-20 text-center p-4">
                <h2 className="text-4xl font-bold">#1</h2>
                <p className="text-lg font-semibold">
                  {top10Candidates[0]?.name}
                </p>
                <p className="text-gray-300">
                  Contestant Id: {top10Candidates[0]?.id}
                </p>
              </div>
            </div>

            {/* 3rd Place - Right */}
            <div className="w-1/4 h-64 relative flex flex-col justify-end items-center border-2 border-white/30 shadow-lg text-white backdrop-blur-lg rounded-3xl overflow-hidden">
              <img
                src={top10Candidates[2]?.image}
                alt={top10Candidates[2]?.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div
                className="absolute bottom-0 w-full group-hover:h-full h-2/5 p-6 flex flex-col justify-end items-center text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="relative z-20 text-center p-4">
                <h2 className="text-3xl font-bold">#3</h2>
                <p className="text-lg font-semibold">
                  {top10Candidates[2]?.name}
                </p>
                <p className="text-gray-300">
                  Contestant Id: {top10Candidates[2]?.id}
                </p>
              </div>
            </div>
          </div>

          {/* Top 4-10 List */}

          <div className="w-full max-w-4xl space-y-4 my-4">
            {top10Candidates.slice(3).map((candidate, index) => (
              <div
                key={candidate.id}
                className="flex items-center bg-white/20 backdrop-blur-lg text-white rounded-xl p-4 shadow-md border border-white/30"
              >
                <h2 className="text-xl font-bold w-12">#{index + 4}</h2>
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-16 h-16 rounded-xl mx-4"
                />
                <div>
                  <p className="text-lg font-semibold">{candidate.name}</p>
                  <p className="text-gray-800">Id: {candidate.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodiumAndTop10;
