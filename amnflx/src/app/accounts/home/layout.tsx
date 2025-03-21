"use client";

import { useState } from "react";
import { FaHome, FaTv, FaFilm, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-gray-900 w-64 p-5 space-y-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
        {/* Logo & Close Button */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">Netflix</h1>
          <button onClick={() => setIsOpen(false)} className="sm:hidden text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        {/* Navigation */}
        <nav className="mt-10 space-y-4">
          <Link href="/" className="flex items-center gap-3 text-lg hover:text-red-500">
            <FaHome /> Home
          </Link>
          <Link href="/tv-shows" className="flex items-center gap-3 text-lg hover:text-red-500">
            <FaTv /> TV Shows
          </Link>
          <Link href="/movies" className="flex items-center gap-3 text-lg hover:text-red-500">
            <FaFilm /> Movies
          </Link>
          <Link href="/search" className="flex items-center gap-3 text-lg hover:text-red-500">
            <FaSearch /> Search
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen flex flex-col sm:ml-64">
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="sm:hidden p-4 text-2xl text-white">
          <FaBars />
        </button>
        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
