"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black/[0.7] antialiased bg-grid-white/[0.02] text-gray-500 py-8 text-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left Side: Copyright */}
        <div className="mb-4 md:mb-0">© 2024, Generative AI.</div>

        {/* Right Side: Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 ">
          <Link href="#" className="hover:text-gray-300">
            Features
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Updates
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Download
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Logos
          </Link>
          <span className="hidden md:block text-gray-600">|</span>
          <Link href="#" className="hover:text-gray-300">
            Privacy
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
