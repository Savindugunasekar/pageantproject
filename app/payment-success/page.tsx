"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const PaymentSuccess: React.FC = () => {
  const router = useRouter();
  const { contestantId, packageType, votes, price } = router.query;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePostPayment = async () => {
    try {
      setIsLoading(true);

      // Send a POST request to the payment-success API with the parameters
      const response = await axios.post('/api/payment-success', {
        contestantId,
        packageType,
        votes,
        price,
      });

      console.log('Payment Success:', response.data);
      // You can handle success response here, maybe navigate or show a message
    } catch (error) {
      console.error('Error posting payment success:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Payment Success</h1>
      <div className="space-y-2 mb-6">
        <p className="text-lg">Contestant ID: {contestantId}</p>
        <p className="text-lg">Package Type: {packageType}</p>
        <p className="text-lg">Votes: {votes}</p>
        <p className="text-lg">Price: {price}</p>
      </div>
      <button
        onClick={handlePostPayment}
        disabled={isLoading}
        className={`px-6 py-2 text-white text-lg font-semibold rounded-md shadow-md transition-colors duration-300 ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isLoading ? 'Processing...' : 'Confirm Payment'}
      </button>
    </div>
  );
};

export default PaymentSuccess;
