"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Script from "next/script";
import { useRouter } from "next/navigation";
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
}

const ContestantPage = () => {
  const [loading, setLoading] = useState(false);
  const [payHereLoaded, setPayHereLoaded] = useState(false);
  const router = useRouter();

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

  // Function to generate MD5 hash and return uppercase version
  const generateHash = (merchant_id: string, order_id: string, amount: number, currency: string, merchant_secret: string) => {
    const hashedSecret = md5(merchant_secret).toString().toUpperCase();
    const amountFormatted = parseFloat(amount.toFixed(2)).toLocaleString("en-US", { minimumFractionDigits: 2 }).replace(/,/g, "");
    return md5(merchant_id + order_id + amountFormatted + currency + hashedSecret).toString().toUpperCase();
  };

  const handlePayment = (packageType: string, votes: number, price: number) => {
    if (!payHereLoaded) {
      toast.error("Payment system is still loading. Please try again.");
      return;
    }

    setLoading(true);

    const merchant_id = process.env.NEXT_PUBLIC_MERCHANT_ID!;
    // Replace with your actual PayHere Merchant ID
    const order_id = `ORDER_${Date.now()}`;
    const amount = price;
    const currency = "LKR";
    const merchant_secret = process.env.NEXT_PUBLIC_MERCHANT_SECRET!; // Replace with your actual PayHere Merchant Secret

    // Generate the hash
    const hash = generateHash(merchant_id, order_id, amount, currency, merchant_secret);

    const payment: Payment = {
      sandbox: true, // Use `false` for production
      merchant_id,
      return_url: "http://localhost:3000/payment-success", // Replace with your success URL
      cancel_url: "http://localhost:3000/payment-cancel", // Replace with your cancel URL
      notify_url: "http://localhost:3000/api/payhere-webhook", // Replace with your webhook URL
      order_id,
      items: packageType,
      currency,
      amount,
      first_name: "John", // Replace with real user data
      last_name: "Doe",
      email: "johndoe@example.com",
      phone: "0771234567",
      address: "Colombo",
      city: "Colombo",
      country: "Sri Lanka",
      hash, // Include the generated hash in the payment object
    };

    if (typeof window !== "undefined" && window.payhere) {
      window.payhere.startPayment(payment);
    } else {
      toast.error("Payment system not available.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-200  bg-fixed ">
      <Script type="text/javascript" src="https://www.payhere.lk/lib/payhere.js" strategy="afterInteractive" />
      <div className="flex justify-center pt-20">
        <div className="flex justify-center lg:w-1/2 items-center">
          <Image
            src="/Miss Sri Lanka 2025.png" // Replace with actual image path
            alt="Contestant"
            width={400}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        <div className="max-w-6xl w-full p-6 lg:flex">
          <div className="flex justify-center items-end lg:w-1/2">
            <Image
              src="/contestant-image.jpg" // Replace with actual image path
              alt="Contestant"
              width={400}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-6 text-center lg:text-left mt-4">
            <h1 className="text-4xl font-bold">Sophia Martinez</h1>
            <p className="text-gray-600 font-semibold">
              Contestant No: <span className="font-bold">#C102</span>
            </p>
            <p className="text-lg font-bold mt-2">Age: 23</p>
            <p className="text-gray-600">Height: 5'9" (175 cm)</p>
            <p className="text-gray-600">Measurements: 34-24-36</p>
            <p className="text-gray-600">Category: Miss Elegance</p>

            <h2 className="mt-6 text-lg font-semibold text-yellow-600">
              Select Your Package
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full items-center justify-center">
              {/* Gold Package */}
              <button
                onClick={() => handlePayment("gold", 50, 50)}
                className="relative bg-gradient-to-r from-black to-yellow-600 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="font-semibold text-sm">Gold Package</p>
                    <p className="text-3xl font-extrabold">50 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right">$50</p>
                </div>
              </button>

              {/* Silver Package */}
              <button
                onClick={() => handlePayment("silver", 20, 20)}
                className="relative bg-gradient-to-r from-gray-900 to-gray-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="font-semibold text-sm">Silver Package</p>
                    <p className="text-3xl font-extrabold">20 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right">$20</p>
                </div>
              </button>

              {/* Bronze Package */}
              <button
                onClick={() => handlePayment("bronze", 10, 10)}
                className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="flex flex-col text-left">
                    <p className="font-semibold text-sm">Bronze Package</p>
                    <p className="text-3xl font-extrabold">10 Votes</p>
                  </div>
                  <p className="text-2xl font-bold text-right">$10</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestantPage;
