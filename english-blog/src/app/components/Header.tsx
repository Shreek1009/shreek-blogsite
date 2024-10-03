// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Blog Logo" className="w-12 h-12 mr-3" />
          <span className="text-3xl font-bold text-gray-800">Blog Name</span>
        </div>

        {/* Navigation */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-blue-500 transition-colors duration-300">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/featured" legacyBehavior>
              <a className="hover:text-blue-500 transition-colors duration-300">Featured Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/new-posts" legacyBehavior>
              <a className="hover:text-blue-500 transition-colors duration-300">New Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/all-posts" legacyBehavior>
              <a className="hover:text-blue-500 transition-colors duration-300">All Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="hover:text-blue-500 transition-colors duration-300">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="hover:text-blue-500 transition-colors duration-300">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="http://website.com" legacyBehavior>
              <a className="hover:text-blue-500 transition-colors duration-300">ಕನ್ನಡ</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
