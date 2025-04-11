// app/login/page.js
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react"; // Ensure you have NextAuth installed and configured

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login authentication logic here,
    // e.g., calling your own API or using NextAuth credentials signIn.
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <Image 
            src="/Vector.svg"  // Adjust path if your file is in a subfolder (e.g., "/images/Vector.svg")
            alt="Logo"
            width={36}
            height={36}
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-1">Welcome back</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please sign in to your account
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <div className="pl-3">
                <Image 
                  src="/email.svg"  // Adjust the path if needed (e.g., "/images/email.svg")
                  alt="Email Icon"
                  width={20}
                  height={20}
                />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 focus:outline-none focus:ring-0 focus:ring-blue-0"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <div className="pl-3">
                <Image 
                  src="/password.svg"  // Adjust the path if needed (e.g., "/images/password.svg")
                  alt="Password Icon"
                  width={20}
                  height={20}
                />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 focus:outline-none focus:ring-0 focus:ring-blue-0"
                required
              />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-1"
              />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Sign in
          </button>

          {/* Sign in with Google Button */}
          <button
            type="button"
            onClick={() => signIn("google")}
            className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
          >
            <Image 
              src="/google.svg"     // Update the path if necessary (e.g., "/images/google.svg")
              alt="Google Icon"
              width={20}             // Adjust size as needed
              height={20}
              className="mr-2"
            />
            Sign in with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
