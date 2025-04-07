"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SplashPage() {
  const router = useRouter();

  // For demonstration, automatically navigate to /login after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* Logo / Icon */}
        <div className="mb-4 text-2xl font-bold">HealthCare AI</div>
        <p className="text-gray-600">Your Health, Your Control</p>
      </div>
    </main>
  );
}
