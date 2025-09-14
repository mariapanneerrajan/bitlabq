'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Header Component - Main navigation header for BitLabQ
 * 
 * Features:
 * - Responsive design with mobile menu toggle
 * - Dark theme optimized
 * - Clean navigation structure
 * - Futuristic branding for BitLabQ
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Handles only navigation and branding
 * - Open/Closed: Extensible for new navigation items
 * - Interface Segregation: Clean props interface
 * - Dependency Inversion: Uses Next.js Link abstraction
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '/', label: 'Home', emoji: '🏠' },
    { href: '/about', label: 'About', emoji: '👨‍💻' },
    { href: '/products', label: 'Products', emoji: '🚀' },
    { href: '/contact', label: 'Contact', emoji: '📧' },
  ];

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                BitLabQ
              </div>
              <span className="text-xl">⚡</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
                >
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
