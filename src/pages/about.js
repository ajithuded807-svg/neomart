import React from "react";

export default function About() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500">
        About Neomart
      </h1>
      <p className="text-lg md:text-2xl text-white/90 max-w-3xl text-center mb-6">
        Neomart is your ultimate destination for trendy products that keep you ahead of the curve.
        Shop easily, securely, and enjoy the latest gadgets and fashion items all in one place!
      </p>
      <p className="text-lg md:text-xl text-white/80 max-w-2xl text-center">
        Our mission is to make online shopping simple, fast, and fun for everyone. Join our community and discover the products that fit your lifestyle.
      </p>
    </div>
  );
}
