"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../components/ui/table";

import Image from "next/image";
import axios from "axios";

// Define the type for contestant
interface Contestant {
  id: string;
  name: string;
  image: string;
  category: string;
  total_votes: number;
  total_amount: number;
}

const PageantLeaderboard = () => {
  const [allVotes, setAllVotes] = useState<Contestant[]>([]);

  useEffect(() => {
    const fetchAllVotes = async () => {
      try {
        const res = await axios.get("/api/fetchAllVotes");
        console.log("all votes:", res.data);
        setAllVotes(res.data); // Axios returns the response data directly
      } catch (error) {
        console.error("Error fetching top candidates:", error);
      }
    };

    fetchAllVotes();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-yellow-200 px-6 flex justify-center">
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
            {allVotes.map((contestant, index) => (
              <TableRow
                key={contestant.id}
                className="border-b hover:bg-gray-200 transition-all duration-200"
              >
                <TableCell className="font-semibold text-lg lg:text-xl text-center">
                  <span className="bg-yellow-500 text-white px-4 py-2 rounded-full">
                    {index + 1}
                  </span>
                </TableCell>
                <TableCell className="flex justify-center items-center">
                  <Image
                    src={contestant.image}
                    alt={contestant.name}
                    width={64} // Updated for better scaling
                    height={64} // Updated for better scaling
                    objectFit="cover"
                    className="rounded-full md:w-16 md:h-16 lg:w-24 lg:h-24 object-cover"
                  />
                </TableCell>
                <TableCell className="font-semibold text-lg lg:text-xl text-center">
                  {contestant.name}
                </TableCell>
                <TableCell className="text-center text-lg lg:text-xl">
                  {contestant.category}
                </TableCell>
                <TableCell className="text-center text-lg lg:text-xl">
                  {contestant.total_votes}
                </TableCell>
                <TableCell className="text-center text-lg lg:text-xl">
                  ${contestant.total_amount} 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PageantLeaderboard;
