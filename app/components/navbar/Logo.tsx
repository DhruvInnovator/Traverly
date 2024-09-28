"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";


const Logo = () => {
  const router = useRouter();

  return (
    <div
  onClick={() => router.push("/")}
  className="hidden md:flex items-center space-x-2 cursor-pointer"
>
  <h1 className="text-2xl font-bold tracking-wide text-red-600">
    Traverly
  </h1>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-8 h-8 text-red-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3v18h18V3H3zm9 15v-6m4 6v-3m-8 3v-6m8-4h-8"
    />
  </svg>
</div>

  );
};

export default Logo;
