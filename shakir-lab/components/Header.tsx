'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Shakir Clinical Laboratory</h1>
              <p className="text-xs text-gray-600">Advanced Medical Testing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">Home</Link>
            <Link href="#services" className="text-gray-700 hover:text-primary transition">Services</Link>
            <Link href="#about" className="text-gray-700 hover:text-primary transition">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition">Contact</Link>
            <Link href="/reports" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition">
              Access Reports
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-primary transition">Home</Link>
            <Link href="#services" className="block text-gray-700 hover:text-primary transition">Services</Link>
            <Link href="#about" className="block text-gray-700 hover:text-primary transition">About</Link>
            <Link href="#contact" className="block text-gray-700 hover:text-primary transition">Contact</Link>
            <Link href="/reports" className="block bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition text-center">
              Access Reports
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
