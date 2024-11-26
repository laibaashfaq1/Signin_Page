'use client';

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      setMessage("Signing in with GitHub...");
      await signIn("github");
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="relative h-screen bg-gray-50">

      {/* Sign-out Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => alert('Successfuly Signout')}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex h-full justify-center items-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome to our website</h2>

          {/* Sign-in Form */}
          <form className="mb-6">
            {/* Email Address */}
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />

            {/* Password */}
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />

            {/* Remember Me */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">
                  Remember for 3 days
                </label>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="button"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>

          {/* GitHub Sign-In */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100"
              onClick={handleSignIn}
            >
              <FaGithub className="mr-3 text-lg" />
              Sign in with GitHub
            </button>
            {message && <div className="mt-4 text-blue-600">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
