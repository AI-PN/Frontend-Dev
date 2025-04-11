// app/register/page.js
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual registration logic
    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      agreed,
    });
    alert(`Account created for ${firstName} ${lastName}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <Image 
            src="/Vector.svg"
            alt="Logo"
            width={36}
            height={36}
          />
        </div>

        {/* Top Heading & Sign In Link */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-gray-500 mt-4">
            Already have an account?
            <span className="block mt-2">
              <Link href="/login" className="text-blue-600 hover:underline">
                Sign in here
              </Link>
            </span>
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First & Last Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full px-3 py-2"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full px-3 py-2"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field with Icon */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-gray-300 rounded w-full px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Image
                  src="/Frame.svg"
                  alt="Password Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Confirm Password Field with Icon */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border border-gray-300 rounded w-full px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Image
                  src="/Frame.svg"
                  alt="Confirm Password Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Terms of Service Checkbox */}
          <div className="text-sm text-gray-500 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              required
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </span>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700"
          >
            Create Account
          </button>
        </form>
        {/* Divider: "Or continue with" */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google & Apple Buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 border border-gray-300 rounded py-2 flex items-center justify-center hover:bg-gray-50">
            <Image 
              src="/google.svg"  // Adjust the path if your file is located elsewhere (e.g., "/images/google.svg")
              alt="Google Icon"
              width={20}       // Adjust width as necessary
              height={20}      // Adjust height as necessary
              className="mr-2"
            />
            Google
          </button>

          <button className="flex-1 border border-gray-300 rounded py-2 flex items-center justify-center hover:bg-gray-50">
            <Image 
              src="/apple.svg"  // Adjust the path if your file is located elsewhere (e.g., "/images/apple.svg")
              alt="Apple Icon"
              width={20}       // Adjust width as necessary
              height={20}      // Adjust height as necessary
              className="mr-2"
            />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}

      
