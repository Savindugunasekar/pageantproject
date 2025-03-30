"use client";

import Image from "next/image";
import Script from "next/script";
import PaymentHandler from "@/components/PaymentHandler";

const ContestantPage = () => {
  const { handlePayment } = PaymentHandler();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-200 bg-fixed">
      <Script type="text/javascript" src="https://www.payhere.lk/lib/payhere.js" strategy="afterInteractive" />
      
      <div className="flex justify-center pt-20">
        <div className="flex justify-center lg:w-1/2 items-center">
          <Image
            src="/Miss Sri Lanka 2025.png"
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
              src="/contestant-image.jpg"
              alt="Contestant"
              width={400}
              height={500}
              className="rounded-2xl"
            />
          </div>
          
          <div className="lg:w-1/2 lg:pl-6 text-center lg:text-left mt-4">
            <h1 className="text-4xl font-bold">Sophia Martinez</h1>
            <p className="text-gray-600 font-semibold">Contestant No: <span className="font-bold">#C102</span></p>
            <p className="text-lg font-bold mt-2">Age: 23</p>
            <p className="text-gray-600">Height: 5'9" (175 cm)</p>
            <p className="text-gray-600">Measurements: 34-24-36</p>
            <p className="text-gray-600">Category: Miss Elegance</p>

            <h2 className="mt-6 text-lg font-semibold text-yellow-600">Select Your Package</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full items-center justify-center">
              <button
                onClick={() => handlePayment("gold", 50, 50)}
                className="relative bg-gradient-to-r from-black to-yellow-600 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <p className="font-semibold text-sm">Gold Package</p>
                  <p className="text-3xl font-extrabold">50 Votes</p>
                  <p className="text-2xl font-bold text-right">$50</p>
                </div>
              </button>

              <button
                onClick={() => handlePayment("silver", 20, 20)}
                className="relative bg-gradient-to-r from-gray-900 to-gray-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <p className="font-semibold text-sm">Silver Package</p>
                  <p className="text-3xl font-extrabold">20 Votes</p>
                  <p className="text-2xl font-bold text-right">$20</p>
                </div>
              </button>

              <button
                onClick={() => handlePayment("bronze", 10, 10)}
                className="relative bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l text-white rounded-4xl px-8 py-4 shadow-lg w-full max-w-lg mx-auto transition-all duration-500 active:scale-[0.85] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <p className="font-semibold text-sm">Bronze Package</p>
                  <p className="text-3xl font-extrabold">10 Votes</p>
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