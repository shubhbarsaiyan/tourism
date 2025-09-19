import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ for navigating home

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    // ✅ Full screen with background
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://i.pinimg.com/1200x/a6/bd/4d/a6bd4db7ee7053689bd971b36cbcd1ef.jpg')`,
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card with glass morphism */}
      <div className="relative z-10 backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-xl p-8 w-full max-w-md">
        
        {/* ❌ Cross Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-200 hover:text-red-500 text-2xl font-bold"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Log in to your account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-white text-sm">OR</div>

        {/* Signup link */}
        <p className="text-center text-white text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}