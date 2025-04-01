// components/PaymentHandler.tsx
"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import md5 from "crypto-js/md5";

interface Payment {
  sandbox: boolean;
  merchant_id: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  order_id: string;
  items: string;
  currency: string;
  amount: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  hash: string;
  custom_1?: string; // ContestantId
  
}
const PaymentHandler = () => {
  const [payHereLoaded, setPayHereLoaded] = useState(false);

  useEffect(() => {
    const loadPayHereScript = () => {
      if (typeof window !== "undefined" && !window.payhere) {
        const script = document.createElement("script");
        script.src = "https://www.payhere.lk/lib/payhere.js";
        script.async = true;
        script.onload = () => setPayHereLoaded(true);
        document.body.appendChild(script);
      }
    };
    loadPayHereScript();
  }, []);

  const generateHash = (merchant_id: string, order_id: string, amount: number, currency: string, merchant_secret: string) => {
    const hashedSecret = md5(merchant_secret).toString().toUpperCase();
    const amountFormatted = parseFloat(amount.toFixed(2)).toLocaleString("en-US", { minimumFractionDigits: 2 }).replace(/,/g, "");
    return md5(merchant_id + order_id + amountFormatted + currency + hashedSecret).toString().toUpperCase();
  };

  const handlePayment = (ContestantId:number,packageType: string, votes: number, price: number) => {
    if (!payHereLoaded) {
      toast.error("Payment system is still loading. Please try again.");
      return;
    }

    const merchant_id = process.env.NEXT_PUBLIC_MERCHANT_ID!;
    const order_id = `ORDER_${Date.now()}`;
    const amount = price;
    const currency = "USD";
    const merchant_secret = process.env.NEXT_PUBLIC_MERCHANT_SECRET!;
    const hash = generateHash(merchant_id, order_id, amount, currency, merchant_secret);

    const payment: Payment = {
      sandbox: true,
      merchant_id,
      return_url: "http://localhost:3000/payment-success",
      cancel_url: "http://localhost:3000/payment-cancel",
      notify_url: "https://9ab7-212-104-231-233.ngrok-free.app/api/payhere-webhook",
      order_id,
      items: packageType,
      currency,
      amount,
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@example.com",
      phone: "0771234567",
      address: "Colombo",
      city: "Colombo",
      country: "Sri Lanka",
      hash,
      custom_1: JSON.stringify({
        ContestantId,
        votes,
        packageType
      }), 
      

    };

    if (typeof window !== "undefined" && window.payhere) {
      window.payhere.startPayment(payment);
    } else {
      toast.error("Payment system not available.");
    }
  };

  return { handlePayment };
};

export default PaymentHandler;
