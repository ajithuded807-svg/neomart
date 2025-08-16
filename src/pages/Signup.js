import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Simulate signup by logging in

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [strength, setStrength] = useState("");
  const [error, setError] = useState("");

  const checkStrength = (pass) => {
    if (pass.length < 8) {
      setStrength("Weak");
    } else if (!/[A-Z]/.test(pass)) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  const getStrengthBar = () => {
    switch (strength) {
      case "Weak":
        return "w-1/3 bg-red-500";
      case "Medium":
        return "w-2/3 bg-yellow-500";
      case "Strong":
        return "w-full bg-green-500";
      default:
        return "w-0";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (strength !== "Strong") {
      setError("Password must be strong.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate signup success
    login();
    navigate("/products");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-blue-600 p-6">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create your{" "}
          <span className="text-blue-600">Neo</span>
          <span className="text-green-600">Mart</span> Account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkStrength(e.target.value);
            }}
            required
          />

          {/* Strength bar */}
          {strength && (
            <div className="h-2 w-full bg-gray-200 rounded mb-4 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${getStrengthBar()}`}
              ></div>
            </div>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-bold hover:scale-105 transition transform"
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <p className="text-center mt-4 text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline hover:text-blue-600 transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}