import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [visibleItems, setVisibleItems] = useState([]);
  const refs = useRef([]);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleItems((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/neomarthomepagebg1.avif')",
          height: "90vh",
          width: "100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* About Developer */}
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
          <h1
            className="text-5xl md:text-6xl font-extrabold px-8 py-4 rounded-3xl shadow-xl 
                       bg-gradient-to-r from-black/60 via-gray-800/50 to-black/60 
                       backdrop-blur-md border border-white/20"
          >
            <span className="text-white drop-shadow-md">Welcome to </span>
            <span className="text-blue-500 drop-shadow-md">Neo</span>
            <span className="text-green-500 drop-shadow-md">Mart</span>
          </h1>

          <p className="mt-8 text-base md:text-lg font-bold text-white drop-shadow-md">
            Smart shopping starts here: curated collections, secure checkout,
            endless delight.
          </p>

          <button
            onClick={handleStartShopping}
            className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold 
                       rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-800 
                       transition-all duration-300 hover:scale-105 animate-pulse-slow backdrop-blur-sm"
          >
            Start Shopping
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-12 px-6 bg-gray-100 flex justify-center">
        <div className="bg-gradient-to-br from-purple-100 via-gray-100 to-indigo-100 shadow-xl border border-gray-300 rounded-3xl p-8 w-full max-w-6xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center border-b-2 border-black/30 pb-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
            Shop by Category
          </h2>

          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const isVisible = visibleItems.includes(idx);

              if (cat.name === "Others") {
                return (
                  <Link
                    to="/products"
                    key={idx}
                    ref={(el) => (refs.current[idx] = el)}
                    data-index={idx}
                    className={`rounded-2xl shadow-md border border-gray-400 aspect-square flex items-center justify-center bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 transition-all duration-700 ease-out ${
                      isVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-90"
                    }`}
                    style={{ transitionDelay: `${idx * 120}ms` }}
                  >
                    <span className="px-5 py-3 bg-gradient-to-r from-gray-300 to-gray-200 font-semibold text-gray-900 rounded-xl shadow-sm">
                      {cat.name}
                    </span>
                  </Link>
                );
              }

              return (
                <Link
                  to={`/category/${toSlug(cat.name)}`}
                  key={idx}
                  ref={(el) => (refs.current[idx] = el)}
                  data-index={idx}
                  className={`rounded-2xl overflow-hidden border border-gray-400 aspect-square flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-200 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-90"
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  {/* Image */}
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`Shop ${cat.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
                    />
                  </div>

                  {/* Label */}
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-center text-sm truncate shadow-md">
                    {cat.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}