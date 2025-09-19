import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // ✅ for going back home

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Details:", { name, email, password });
  };

  return (
    // ✅ Full screen background image
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://i.pinimg.com/1200x/a6/bd/4d/a6bd4db7ee7053689bd971b36cbcd1ef.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-xl p-8 w-full max-w-md">
        
        {/* ❌ Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-200 hover:text-red-500 text-2xl font-bold"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create your account
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-white mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-white text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}