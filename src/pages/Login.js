import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password); // ✅ Pass credentials
      navigate("/products");
    } catch (err) {
      console.error("Login failed:", err.message);
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/products");
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google login failed. Try again.");
    }
  };

  const strengthColors = {
    Weak: "bg-red-500 w-1/3",
    Medium: "bg-yellow-500 w-2/3",
    Strong: "bg-green-500 w-full",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 animate-gradient-x p-6">
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Branding */}
        <h1 className="text-4xl font-extrabold text-center mb-6">
          <span className="text-blue-500">Neo</span>
          <span className="text-green-500">Mart</span>
        </h1>
        <h2 className="text-xl font-bold text-white/90 mb-6 text-center">
          Login to Continue
        </h2>

        {/* Error message */}
        {error && (
          <div className="bg-red-500 text-white text-center py-2 rounded mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkStrength(e.target.value);
            }}
            required
          />

          {/* Password strength bar */}
          {strength && (
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${strengthColors[strength]}`}
              ></div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/30"></div>
          <span className="px-4 text-white/70 text-sm">OR</span>
          <div className="flex-grow h-px bg-white/30"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="text-center text-white/80 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}