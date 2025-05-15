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

      const localId = Date.now();

      const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?localId=${localId}`;

      const genieReq = {
        amount: price * 100 * 300,
        currency: "LKR",
        redirectUrl,
      };

      // Send the full payload as a single object
      const response = await axios.post("/api/geniebiz-payment", {
        genieReq,
        votes,
        price,
        contestantId,
        packageType,
        localId
      });

      const paymentUrl = response.data?.url;

      if (paymentUrl) {
        window.location.href = paymentUrl;
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
