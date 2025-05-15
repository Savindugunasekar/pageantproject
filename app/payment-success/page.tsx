"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const PaymentSuccess: React.FC = () => {
  const [contestantId, setContestantId] = useState<string | null>(null);
  const [packageType, setPackageType] = useState<string | null>(null);
  const [votes, setVotes] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean | null>(null); // updated
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      const id = searchParams.get("localId");

      if (!id) {
        console.error("No localId found in URL");
        return;
      }

      try {
        const response = await axios.post("/api/fetchPurchaseDetails", {
          localId: id,
        });

        const purchaseDetails = response.data;
        console.log("purchaseDetails:", purchaseDetails);

        if (purchaseDetails) {
          setIsConfirmed(purchaseDetails.isConfirmed); // Use boolean instead of Status string
          setContestantId(String(purchaseDetails.ContestantId));
          setPackageType(purchaseDetails.PackageType);
          setVotes(String(purchaseDetails.Votes));
          setPrice(String(purchaseDetails.Amount));
        }
      } catch (error) {
        console.error("Error fetching purchase details:", error);
      }
    };

    getData();
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

  const handleGoHome = () => {
    window.location.href = "/";
  };

  // === Conditional UIs ===

  // Waiting for confirmation status
  if (isConfirmed === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-50">
        <div className="text-lg text-blue-600">Checking payment status...</div>
      </div>
    );
  }

  // Payment Not Confirmed
  if (!isConfirmed) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-50 px-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-red-400">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Unsuccessful</h1>
          <p className="text-red-500 mb-6">
            Your payment could not be confirmed. Please try again later or contact support.
          </p>
          <button
            onClick={handleGoHome}
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // Payment Confirmed Receipt
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
