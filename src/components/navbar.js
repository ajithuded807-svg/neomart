import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-gray-100 h-auto md:h-20 flex flex-col md:flex-row items-center shadow-lg fixed top-0 left-0 z-50 px-4 md:px-6 py-3 md:py-0 gap-3 md:gap-0">
      {/* Top Row: Logo + Mobile Menu Button */}
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-4xl font-extrabold transform transition-transform duration-300 hover:scale-105"
        >
          <span className="text-blue-600">Neo</span>
          <span className="text-green-500">Mart</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Search Bar */}
      <div className="w-full md:flex-grow flex justify-center px-0 md:px-4">
        <div className="flex items-center bg-gray-200 border border-black rounded-full overflow-hidden w-full max-w-lg shadow-md transform transition-transform duration-200 hover:scale-105">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 flex-grow outline-none text-gray-700 bg-transparent text-sm md:text-base"
          />
          <button className="p-2 hover:bg-gray-300 transition">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-4 relative">
        {isHomePage ? (
          !isLoggedIn && (
            <Link
              to="/login"
              className="text-gray-800 font-semibold px-4 py-2 rounded-lg transform transition-all duration-300 hover:bg-gray-200"
            >
              Login
            </Link>
          )
        ) : (
          <Link
            to="/"
            className="text-gray-800 font-semibold px-4 py-2 rounded-lg transform transition-all duration-300 hover:bg-gray-200"
          >
            Home
          </Link>
        )}

        {/* 3-dots menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="text-2xl font-bold flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#8942;
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="w-full flex flex-col md:hidden bg-white rounded-xl shadow-lg py-2">
          <Link
            to="/products"
            className="px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          {isLoggedIn && (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 text-left"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
