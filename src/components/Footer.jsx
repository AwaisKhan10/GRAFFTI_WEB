import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footers() {
  return (
    <>
      <footer className="bg-[#0f172a] text-white mt-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pt-6">
          {/* Left Column - Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Million Squares</h3>
            <p className="text-sm text-gray-400 mb-4">
              A collaborative mosaic artwork where everyone can own a piece and
              contribute to a massive digital masterpiece.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Middle Column - Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Grid
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Drawing Tool
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Payment Modal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">
              Have questions? Reach out!
            </p>
            <a href="#" className="text-indigo-400 hover:underline text-sm">
              Contact Us
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Subscribe</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-4 py-2 rounded-r-md hover:bg-gray-200 transition font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          © 2025 Million Squares. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footers;
