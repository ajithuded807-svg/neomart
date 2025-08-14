import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    const priceNumber = Number(item.price.replace("$", ""));
    return total + priceNumber;
  }, 0);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-600">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-700">Your cart is empty!</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h2>
                <p className="text-lg font-semibold text-purple-600 mb-4">{item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-6 py-2 bg-red-500 text-white rounded-xl font-bold shadow-lg hover:bg-red-600 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Total: <span className="text-purple-600">${totalPrice}</span>
            </p>
            <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 transition-colors duration-300">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
