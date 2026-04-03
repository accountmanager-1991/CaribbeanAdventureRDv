"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-ocean text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌴</span>
            <span className="font-bold text-lg tracking-tight">
              Caribbean Adventure <span className="text-ocean-light">RD</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="hover:text-ocean-light transition-colors"
            >
              Home
            </Link>
            <Link
              href="/adventures"
              className="hover:text-ocean-light transition-colors"
            >
              Adventures
            </Link>
            <Link
              href="#about"
              className="hover:text-ocean-light transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-ocean-light transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/adventures"
              className="bg-sunset hover:bg-sunset-dark px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="/"
              className="hover:text-ocean-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/adventures"
              className="hover:text-ocean-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Adventures
            </Link>
            <Link
              href="#about"
              className="hover:text-ocean-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-ocean-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/adventures"
              className="bg-sunset hover:bg-sunset-dark px-4 py-2 rounded-lg font-semibold transition-colors text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
