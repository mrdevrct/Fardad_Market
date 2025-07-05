/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link href="/">
            <h1 className="text-2xl font-bold text-blue-600">لوگو</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" asChild>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                خانه
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                href="/products"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                prefetch
              >
                محصولات
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                درباره ما
              </Link>
            </Button>
          </div>
        </div>

        {/* Search Bar, Login Button, and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 bg-gray-200"
              />
              <button
                onClick={handleSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                <FaSearch size={18} />
              </button>
            </div>
            <Button
              asChild
              className="bg-blue-500 text-white px-6 py-2 rounded-3xl hover:bg-blue-700 transition-colors w-30 text-center font-sans font-bold"
            >
              <Link href="/login">{`ورود  /  عضویت`}</Link>
            </Button>
          </div>
          <Button variant="ghost" onClick={toggleMenu} className="md:hidden">
            <FaBars size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {/* Mobile Search Bar */}
            <div className="relative px-4">
              <input
                type="text"
                placeholder="جستجو..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
              />
              <button
                onClick={handleSearch}
                className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                <FaSearch size={18} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <Button variant="ghost" asChild>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                خانه
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                href="/products"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
                prefetch
              >
                محصولات
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                درباره ما
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-blue-500 text-white transition-colors rounded-3xl p-2"
            >
              <Link href="/login" onClick={toggleMenu}>
                ورود / عضویت
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
