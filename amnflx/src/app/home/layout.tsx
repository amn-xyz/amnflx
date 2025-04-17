"use client";

import { useState } from "react";
import { FaTv, FaFilm, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { bebas_nue } from "@/app/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background text-white min-h-screen">
      {/* Top Bar */}
      <header className="bg-background px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className={`${bebas_nue.className} text-4xl font-bold text-red-600`}>AMNFLX</h1>
        
        {/* Navigation (Hidden on Small Screens) */}
        <nav className="hidden sm:flex space-x-6">
          {/* <Link href="/" className="text-lg hover:text-red-500 flex items-center gap-2">
            <FaHome /> Home
          </Link> */}
          <Link href="/home/experiences" className="text-lg hover:text-red-500 flex items-center gap-2">
            <FaTv /> Experience
          </Link>
          <Link href="/home/projects" className="text-lg hover:text-red-500 flex items-center gap-2">
            <FaFilm /> Projects
          </Link>
          <Link href="/accounts" className="text-lg hover:text-red-500 flex items-center gap-2">
            <FaUserCircle /> Switch User
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-2xl text-white">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden bg-neutral-800 p-4 flex flex-col space-y-4">
          {/* <Link href="/" className="text-lg hover:text-red-500 flex items-center gap-2">
            <FaHome /> Home
          </Link> */}
          <Link href="/home/experiences" className="text-lg hover:text-red-500 flex items-center gap-2">
            <FaTv /> Experience
          </Link>
          <Link href="/home/projects" className="text-lg hover:text-red-500 flex items-center gap-2">
            <FaFilm /> Projects
          </Link>
          <Link href="/accounts" className="text-lg hover:text-red-500 flex items-center gap-2">
            <FaUserCircle /> Switch User
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="p-6">{children}</main>
    </div>
  );
}
