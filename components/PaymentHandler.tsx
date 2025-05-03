"use client";

import { useState } from "react";
import axios from "axios";

const PaymentHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePayment = async (
    contestantId: string,
    packageType: string,
    votes: number,
    price: number
  ): Promise<void> => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        "https://api.uat.geniebiz.lk/public/v2/transactions",
        {
          amount: price,
          currency: "LKR",
          localId: "Test dialog txn local id",
          tokenizationDetails: {
            tokenize: false,
            recurringFrequency: "UNSCHEDULED",
            paymentType: "UNSCHEDULED",
          },
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjM2YmFmY2U3LWEyMDEtNDI5Yi1hOWUyLWM1Yjc4NTQ2Njc3YyIsImNvbXBhbnlJZCI6IjYzOTdmMzlkZjA3ZmJhMDAwODQyYTkwYiIsImlhdCI6MTY3MDkwMjY4NSwiZXhwIjo0ODI2NTc2Mjg1fQ.fy12dgFhA3iB_RCjD7y8j5HClNRZUiBZgAg-QzFpxaE",
          },
        }
      );

      console.log("Payment response:", response.data);
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handlePayment, isLoading };
};

export default PaymentHandler;
