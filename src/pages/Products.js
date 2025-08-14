import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Smartphone", price: "$299", image: "https://via.placeholder.com/200x200.png?text=Smartphone" },
  { id: 2, name: "Headphones", price: "$99", image: "https://via.placeholder.com/200x200.png?text=Headphones" },
  { id: 3, name: "Smartwatch", price: "$199", image: "https://via.placeholder.com/200x200.png?text=Smartwatch" },
  { id: 4, name: "Gaming Console", price: "$399", image: "https://via.placeholder.com/200x200.png?text=Console" },
  { id: 5, name: "Laptop", price: "$799", image: "https://via.placeholder.com/200x200.png?text=Laptop" },
];

export default function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-600">
        Trending Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
            <p className="text-lg font-semibold text-purple-600 mb-4">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-2 bg-purple-600 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}