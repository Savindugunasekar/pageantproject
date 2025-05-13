"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const PaymentSuccess: React.FC = () => {
  const [contestantId, setContestantId] = useState<string | null>(null);
  const [packageType, setPackageType] = useState<string | null>(null);
  const [votes, setVotes] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setContestantId(searchParams.get("contestantId"));
    setPackageType(searchParams.get("packageType"));
    setVotes(searchParams.get("votes"));
    setPrice(searchParams.get("price"));
  }, [searchParams]);

  const handlePostPayment = async () => {
    try {
      setIsLoading(true);

      if (!contestantId || !packageType || !votes || !price) {
        console.error("Missing required parameters");
        return;
      }

      const response = await axios.post("/api/payment-success", {
        contestantId,
        packageType,
        votes,
        price,
      });

      console.log("Payment Success:", response.data);
      setIsSuccess(true);

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.error("Error posting payment success:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed px-6"
      style={{ backgroundImage: "url('/bluebg.svg')" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6 border border-blue-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Payment Receipt</h1>
          {isSuccess && <p className="text-blue-500 text-md">Thank you for your support!</p>}
          
        </div>

        <hr className="border-blue-200" />

        <div className="text-blue-800 text-base space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Contestant ID:</span>
            <span>{contestantId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Package Type:</span>
            <span>{packageType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Votes:</span>
            <span>{votes}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Price:</span>
            <span>${price}</span>
          </div>
        </div>

        <hr className="border-blue-200" />

        <button
          onClick={handlePostPayment}
          disabled={isLoading || isSuccess}
          className={`w-full py-3 text-white text-lg font-semibold rounded-lg transition-all duration-300 ${
            isSuccess
              ? "bg-green-600 cursor-default"
              : isLoading
              ? "bg-red-300 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {isSuccess
            ? "Payment Successful"
            : isLoading
            ? "Processing..."
            : "Click Here to Confirm Your Payment!"}
        </button>
      </div>
    </div>
  );
};

const PaymentSuccessWithSuspense: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess />
    </React.Suspense>
  );
};

export default PaymentSuccessWithSuspense;
