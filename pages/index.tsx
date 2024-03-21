import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Interface } from "readline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-between bg-blue-50 ${inter.className} text-black`}
    >
      <div className="lg:w-1/2 w-full bg-yellow-100 h-screen "></div>
      <div className="w-1/2 bg-red-100 h-screen hidden lg:flex justify-center items-center"></div>
    </main>
  );
}
