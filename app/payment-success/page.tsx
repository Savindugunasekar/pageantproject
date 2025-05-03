"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // For extracting query params
import axios from "axios";

// Suspense Boundary for client-side data fetching
const PaymentSuccess: React.FC = () => {
  const [contestantId, setContestantId] = useState<string | null>(null);
  const [packageType, setPackageType] = useState<string | null>(null);
  const [votes, setVotes] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();

  // Extract query parameters from the URL using useSearchParams
  useEffect(() => {
    setContestantId(searchParams.get("contestantId"));
    setPackageType(searchParams.get("packageType"));
    setVotes(searchParams.get("votes"));
    setPrice(searchParams.get("price"));
  }, [searchParams]);

  const handlePostPayment = async () => {
    try {
      setIsLoading(true);

      // Ensure values are not null or undefined before sending the request
      if (!contestantId || !packageType || !votes || !price) {
        console.error("Missing required parameters");
        return;
      }

      // Send a POST request to the payment-success API with the parameters
      const response = await axios.post("/api/payment-success", {
        contestantId,
        packageType,
        votes,
        price,
      });

      console.log("Payment Success:", response.data);
      // You can handle success response here, maybe navigate or show a message
    } catch (error) {
      console.error("Error posting payment success:", error);
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
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isLoading ? "Processing..." : "Confirm Payment"}
      </button>
    </div>
  );
};

// Wrap the PaymentSuccess component in Suspense
const PaymentSuccessWithSuspense: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess />
    </React.Suspense>
  );
};

export default PaymentSuccessWithSuspense;
