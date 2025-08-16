import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const lastScrollY = useRef(0);

  // Hide/Show navbar on scroll + detect transparency
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setScrolled(currentScrollY > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`w-full h-20 fixed top-0 left-0 z-50 px-3 md:px-6 shadow-md backdrop-blur-md transition-all duration-300 flex items-center ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-gray-100/80" : "bg-gray-100"}`}
    >
      {/* Flex grid: Logo | Search | Right */}
      <div className="w-full flex items-center justify-between gap-3 md:gap-6">
        
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-2xl md:text-4xl font-extrabold flex-shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <span className="text-blue-600">Neo</span>
          <span className="text-green-500">Mart</span>
        </Link>

        {/* Center: Search Bar */}
        <div className="flex-1 flex justify-center">
          <div
            className="flex items-center w-full min-w-[140px] sm:min-w-[180px] 
                       max-w-[600px] bg-gray-200 border border-gray-300 
                       rounded-full overflow-hidden shadow-sm"
          >
            <input
              type="text"
              placeholder="Search products..."
              className="flex-grow px-3 md:px-4 py-2 md:py-2.5 
                         text-sm md:text-base 
                         outline-none text-gray-700 bg-transparent"
            />
            <button
              className="flex items-center justify-center 
                         px-3 md:px-4 
                         h-10 md:h-12 
                         hover:bg-gray-300 transition"
            >
              <MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right: Login/Home + Menu */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0 relative">
          {isHomePage ? (
            !isLoggedIn && (
              <Link
                to="/login"
                className="text-gray-800 text-xs md:text-base font-semibold px-2 md:px-3 py-1.5 md:py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Login
              </Link>
            )
          ) : (
            <Link
              to="/"
              className="text-gray-800 text-xs md:text-base font-semibold px-2 md:px-3 py-1.5 md:py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Home
            </Link>
          )}

          {/* 3-dots menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition text-lg md:text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#8942;
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-36 md:w-44 bg-white rounded-xl shadow-lg py-2 flex flex-col z-50">
                <Link
                  to="/products"
                  className="px-4 py-2 text-gray-800 hover:bg-gray-300 rounded-lg transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/cart"
                  className="px-4 py-2 text-gray-800 hover:bg-gray-300 rounded-lg transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Cart
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 text-gray-800 hover:bg-gray-300 rounded-lg transition"
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
                    className="px-4 py-2 text-gray-800 hover:bg-gray-300 rounded-lg transition text-left w-full"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}