"use client";

import { useState } from "react";
import axios from "axios";

const PaymentHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePayment = async (
    contestantId: number,
    packageType: string,
    votes: number,
    price: number
  ): Promise<void> => {
    try {
      setIsLoading(true);

     
     const response = await axios.post("/api/geniebiz-payment", {
        "amount": 600.00,
        "currency": "LKR",
        "localId": "Test dialog txn local id",
        "tokenizationDetails": {
          "tokenize": false,
          "recurringFrequency": "UNSCHEDULED",
          "paymentType": "UNSCHEDULED"
      }
      });

      const paymentUrl = response.data?.url;

    if (paymentUrl) {
      window.location.href = paymentUrl; // Redirect to GenieBiz payment page
    } else {
      console.error("No payment URL returned from API");
    }



      
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handlePayment, isLoading };
};

export default PaymentHandler;
