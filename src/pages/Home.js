import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const handleStartShopping = () => {
    navigate(isLoggedIn ? "/products" : "/login");
  };

  const toSlug = (str = "") =>
    str
      .toLowerCase()
      .trim()
      .replace(/['’`]/g, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const categories = [
    { name: "Men's Wearing", image: "/mens.jpeg" },
    { name: "Women's Wearing", image: "/womens.jpg" },
    { name: "Electronics", image: "/electronics.webp" },
    { name: "Home Appliances", image: "/homeappl.webp" },
    { name: "Books & Stationery", image: "/books.webp" },
    { name: "Sports & Outdoors", image: "/sports.webp" },
    { name: "Toys & Games", image: "/toys.webp" },
    { name: "Beauty & Personal Care", image: "/makeup.webp" },
    { name: "Groceries", image: "/groceries.webp" },
    { name: "Gadgets & Gizmos", image: "/gadgets.webp" },
    { name: "Home & Decor", image: "/home-decor.jpg" },
    { name: "Footwear", image: "/footwear.webp" },
    { name: "Jewellery", image: "/jwellary.webp" },
    { name: "Kitchen Essentials", image: "/kitchen.jpg" },
    { name: "Travel & Luggage", image: "/travel.webp" },
    { name: "Pet Supplies", image: "/pets.webp" },
    { name: "Automotive", image: "/automotive.webp" },
    { name: "Others", image: null },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCategoriesVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/neomarthomepagebg1.jpg')",
          height: "90vh",
          width: "100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* About Developer (top-left corner) */}
        <Link
          to="/about"
          className="absolute top-4 left-4 flex items-center space-x-3 bg-white p-2 rounded-full hover:scale-105 transition shadow-md"
        >
          <img
            src="/ajit.jpg"
            alt="Developer"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <span className="font-bold">
            <span className="text-blue-600">About</span>{" "}
            <span className="text-green-600">Developer</span>
          </span>
        </Link>

        {/* Floating Content */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center animate-float">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-350 to-purple-400">
            Welcome to <span className="text-white">NeoMart</span>
          </h1>

          <p className="mt-8 text-base md:text-lg font-bold text-white">
            Smart shopping starts here: curated collections, secure checkout, endless delight.
          </p>

          <button
            onClick={handleStartShopping}
            className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 hover:scale-105 animate-pulse-slow"
          >
            Start Shopping
          </button>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-10 left-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Categories Section */}
      <div className="py-12 px-6 bg-gray-100 flex justify-center">
        <div className="bg-gray-200 shadow-lg border border-black rounded-lg p-6 w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center border-b-2 border-black pb-2">
            Shop by Category
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {categories.map((cat, idx) => {
              const delay = `${idx * 0.1}s`;

              if (cat.name === "Others") {
                return (
                  <Link
                    to="/products"
                    key={idx}
                    className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg border-2 border-black aspect-square flex items-center justify-center ${categoriesVisible ? "fade-up" : ""}`}
                    style={{ animationDelay: delay }}
                  >
                    <button className="px-4 py-2 bg-gray-300 font-semibold text-gray-800 rounded-md hover:shadow-md transition">
                      {cat.name}
                    </button>
                  </Link>
                );
              }

              return (
                <Link
                  to={`/category/${toSlug(cat.name)}`}
                  key={idx}
                  className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg border-2 border-black aspect-square flex flex-col ${categoriesVisible ? "fade-up" : ""}`}
                  style={{ animationDelay: delay }}
                >
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="p-2 bg-gray-300 font-semibold text-gray-800 text-center text-sm truncate hover:shadow-md transition">
                    {cat.name}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}