import React from "react";
import { HelpCircle } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto container px-6 py-4 md:px-40">
        <div className="flex justify-between items-center">
          <div className="relative group">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Converse
              <span className="inline-block text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-1 transform group-hover:scale-110 transition-transform duration-300">
                Ease
              </span>
            </h1>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="relative group">
              <h1 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Home
              </h1>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </div>

            <div className="relative group">
              <h1 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Features
              </h1>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </div>

            <div className="relative group">
              <h1 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Contact
              </h1>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </div>

            <div className="relative group">
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                aria-label="Help"
              >
                <HelpCircle className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient line at the bottom */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </nav>
  );
}

export default Navbar;