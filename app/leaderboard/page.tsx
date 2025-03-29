"use client"
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
  } from "../../components/ui/table";
  import msworld from "../../public/contestant-image-cropped.png";
  import Image from "next/image";

  import { Button } from "@/components/ui/button";
import { useState } from "react";
  
  const mockData = [
    { id: 1, image: msworld, name: "Emma Johnson", category: "Miss Elegance", votes: 320, moneySpent: 1500 },
    { id: 2, image: msworld, name: "Sophia Lee", category: "Miss Charm", votes: 280, moneySpent: 1300 },
    { id: 3, image: msworld, name: "Isabella Martinez", category: "Miss Talent", votes: 250, moneySpent: 1100 },
    { id: 4, image: msworld, name: "Olivia Davis", category: "Miss Beauty", votes: 350, moneySpent: 1600 },
    { id: 5, image: msworld, name: "Ava Garcia", category: "Miss Personality", votes: 400, moneySpent: 1700 },
    { id: 6, image: msworld, name: "Mia Rodriguez", category: "Miss Elegance", votes: 310, moneySpent: 1550 },
    { id: 7, image: msworld, name: "Amelia Perez", category: "Miss Charm", votes: 290, moneySpent: 1450 },
    { id: 8, image: msworld, name: "Harper Wilson", category: "Miss Talent", votes: 240, moneySpent: 1000 },
    { id: 9, image: msworld, name: "Evelyn Anderson", category: "Miss Beauty", votes: 330, moneySpent: 1450 },
    { id: 10, image: msworld, name: "Abigail Thomas", category: "Miss Personality", votes: 370, moneySpent: 1650 },
    { id: 11, image: msworld, name: "Ella Jackson", category: "Miss Elegance", votes: 310, moneySpent: 1400 },
    { id: 12, image: msworld, name: "Scarlett White", category: "Miss Charm", votes: 260, moneySpent: 1200 },
    { id: 13, image: msworld, name: "Sofia Harris", category: "Miss Talent", votes: 230, moneySpent: 900 },
    { id: 14, image: msworld, name: "Chloe Martin", category: "Miss Beauty", votes: 340, moneySpent: 1500 },
    { id: 15, image: msworld, name: "Layla Thompson", category: "Miss Personality", votes: 360, moneySpent: 1600 },
  ];
  
  const ITEMS_PER_PAGE = 10;
  
  const PageantLeaderboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);
    const displayedContestants = mockData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-yellow-200 px-6 flex flex-col items-center">
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
              {displayedContestants.map((contestant, index) => (
                <TableRow
                  key={contestant.id}
                  className="border-b hover:bg-gray-200 transition-all duration-200"
                >
                  <TableCell className="font-semibold text-lg lg:text-xl text-center">
                    <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">
                      {index + 1 + (currentPage - 1) * ITEMS_PER_PAGE}
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
          <div className="flex gap-4 mt-6 w-full justify-center">
            <Button
            className="bg-white border-yellow-500 border-2 text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition-all duration-200"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-lg font-medium text-yellow-500">Page {currentPage} of {totalPages}</span>
            <Button
            className="bg-white border-yellow-500 border-2 text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition-all duration-200"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PageantLeaderboard;