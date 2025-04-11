// app/forgot-password/page.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Add your reset password logic here (e.g., API call to send a reset link)
    console.log("Password reset email sent to:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email to receive a password reset link.
        </p>
        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label
              htmlFor="reset-email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="reset-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-sm text-blue-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
