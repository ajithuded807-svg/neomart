import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

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

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full flex items-center justify-center bg-no-repeat bg-center bg-cover h-[65vh] sm:h-[75vh] md:h-[90vh]"
        style={{
          backgroundImage: "url('/neomarthomepagebg1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Center Content */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-350 to-purple-400">
            Welcome to <span className="text-white">NeoMart</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-bold text-white">
            Smart shopping starts here: curated collections, secure checkout, endless delight.
          </p>

          <button
            onClick={handleStartShopping}
            className="mt-6 sm:mt-8 px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 hover:scale-105"
          >
            Start Shopping
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-10 px-4 sm:px-6 bg-gray-100 flex justify-center">
        <div className="bg-gray-200 shadow-lg border border-black rounded-lg p-4 sm:p-6 w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center border-b-2 border-black pb-2">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {categories.map((cat, idx) => {
              if (cat.name === "Others") {
                return (
                  <Link
                    to="/products"
                    key={idx}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg border-2 border-black aspect-square flex items-center justify-center"
                  >
                    <button className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-300 font-semibold text-gray-800 rounded-md hover:shadow-md transition text-sm sm:text-base">
                      {cat.name}
                    </button>
                  </Link>
                );
              }

              return (
                <Link
                  to={/category/${toSlug(cat.name)}}
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg border-2 border-black aspect-square flex flex-col"
                >
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="p-2 bg-gray-300 font-semibold text-gray-800 text-center text-xs sm:text-sm truncate hover:shadow-md transition">
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
