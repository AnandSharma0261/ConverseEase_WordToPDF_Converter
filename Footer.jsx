import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-md border-t border-gray-100">
      <div className="max-w-screen-2xl mx-auto container px-6 py-4 md:px-40">
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Footer Links */}
          <div className="flex space-x-8">
            <div className="relative group">
              <h1 className="text-md font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Privacy Policy
              </h1>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </div>

            <div className="relative group">
              <h1 className="text-md font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Terms of Service
              </h1>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </div>

            <div className="relative group">
              <h1 className="text-md font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Contact Us
              </h1>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </div>
          </div>

          {/* Copyright Text */}
          <p className="text-center text-gray-500 text-sm mt-4">
            © 2024 - All rights reserved by Anand Sharma.
          </p>
        </div>
      </div>

      {/* Subtle gradient line at the top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </footer>
  );
}

export default Footer;
