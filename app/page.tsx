"use client"
import { useEffect } from "react";
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export default function Home() {

  useEffect(() => {
    async function fetchTestData() {
      const response = await fetch('/api/testfetch');
      const data = await response.json();
      console.log('Fetched data:', data);
    }

    fetchTestData();
    
  },[])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 className="text-white text-xl">Test page</h1>
    </div>
  );
}
