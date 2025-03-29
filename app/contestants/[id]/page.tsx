"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ContestantPage = () => {
  return (
    <>
      <div className="flex justify-center md:w-1/2 items-center">
        <Image
          src="/Miss Sri Lanka 2025.png" // Replace with actual image path
          alt="Contestant"
          width={400}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-white to-yellow-200 flex justify-center items-center p-4">
        <div className="max-w-4xl w-full p-6 md:flex md:items-center">
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/contestant-image.png" // Replace with actual image path
              alt="Contestant"
              width={400}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div className="md:w-1/2 md:pl-6 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-2xl font-bold">Sophia Martinez</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-lg p-4 flex-1 text-center">
                <p className="font-semibold md:text-left">Gold Package</p>
                <div className="flex"></div>
                <p className="text-xl font-bold  md:text-left">50 Votes</p>
                <p className="text-lg font-bold md:text-right">$50</p>
              </div>
              <div className="bg-gray-800 text-white rounded-lg p-4 flex-1 text-center">
                <p className="font-semibold md:text-left">Silver Package</p>
                <p className="text-xl font-bold md:text-left">20 Votes</p>
                <p className="text-lg font-bold md:text-right">$20</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-lg p-4 flex-1 text-center">
                <p className="font-semibold md:text-left">Brownse Package</p>
                <p className="text-xl font-bold md:text-left">10 Votes</p>
                <p className="text-lg font-bold md:text-right">$05</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestantPage;
