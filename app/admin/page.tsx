'use client';

import { useState } from 'react';
import axios from 'axios';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../components/ui/table';
import Image from 'next/image';

interface Contestant {
  id: string;
  name: string;
  image: string;
  category: string;
  total_votes: number;
  total_amount: number;
}

export default function AdminPage() {
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [allVotes, setAllVotes] = useState<Contestant[]>([]);

  const fetchAllVotes = async () => {
    try {
      const res = await axios.get('/api/fetchAllVotes');
      setAllVotes(res.data);
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
        fetchAllVotes();
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
        <div  className="min-h-screen inset-0 flex justify-center items-center z-50 w-full overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/bluebg.svg')" }}>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 max-w-md w-full"
          >
            <h2 className="text-2xl font-semibold text-blue-600">Admin Access</h2>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </form>
        </div>
      )}

      {isVerified ? (
        <div
          className="min-h-screen w-full overflow-hidden bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/bluebg.svg')" }}
        >
          <div className="w-full lg:max-w-[85%] my-36 mx-auto">
            <Table className="bg-white  shadow-lg rounded-2xl overflow-hidden mb-10">
              <TableHeader>
                <TableRow className="bg-blue-600 text-white text-lg">
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
                    className="bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-200 border-b"
                  >
                    <TableCell className="font-semibold text-lg lg:text-xl text-center">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
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
