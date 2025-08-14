import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pass) => {
    if (pass.length < 8) {
      setStrength("Weak - at least 8 characters");
    } else if (!/[A-Z]/.test(pass)) {
      setStrength("Medium - add an uppercase letter");
    } else {
      setStrength("Strong ✅");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (strength === "Strong ✅") {
      login();
      navigate("/products");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">Login to NeoMart</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkStrength(e.target.value);
            }}
            required
          />
          <p
            className={`text-sm mb-4 ${
              strength.includes("Strong") ? "text-green-600" : "text-red-500"
            }`}
          >
            {strength}
          </p>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}