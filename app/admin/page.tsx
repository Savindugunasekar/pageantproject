'use client';

import { useState } from 'react';
import axios from 'axios';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../components/ui/table';
import Image from 'next/image';

// Define the type for contestant
interface Contestant {
  id: string;
  name: string;
  image: string;
  category: string;
  total_votes: number;
  total_amount: number;
}

export default function AdminPage() {
  const [showModal, setShowModal] = useState(true); // Always show the modal initially
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [allVotes, setAllVotes] = useState<Contestant[]>([]);

  // Fetch all votes data once the password is verified
  const fetchAllVotes = async () => {
    try {
      const res = await axios.get('/api/fetchAllVotes');
      setAllVotes(res.data); // Axios returns the response data directly
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/adminAuth', { password });
      if (res.data.success) {
        setShowModal(false);
        setIsVerified(true);
        fetchAllVotes(); // Fetch leaderboard data
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md flex flex-col gap-4"
          >
            <h2 className="text-xl font-semibold">Admin Access</h2>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-blue-600 text-white py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Page content, hidden until verified */}
      {isVerified ? (
        <div className="min-h-screen w-full bg-gradient-to-b from-white to-yellow-200 px-6 flex justify-center">
          <div className="w-full lg:max-w-[85%] my-36">
            <Table className="bg-white shadow-lg rounded-2xl overflow-hidden mb-10">
              <TableHeader>
                <TableRow className="bg-yellow-500 text-white text-lg">
                  <TableHead className="text-center">Position</TableHead>
                  <TableHead className="text-center">Image</TableHead>
                  <TableHead className="text-center">Name</TableHead>
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
                        width={64}
                        height={64}
                        objectFit="cover"
                        className="rounded-full md:w-16 md:h-16 lg:w-24 lg:h-24 object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-semibold text-lg lg:text-xl text-center">
                      {contestant.name}
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
      ) : (
        <div className="text-center mt-10 text-gray-500">Authenticating...</div>
      )}
    </div>
  );
}
