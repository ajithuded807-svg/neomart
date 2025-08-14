import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-bold text-lg">© 2025 Neomart. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
