import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800">Blog Name</div>
        <ul className="flex space-x-6 text-lg">
          {/* Using Link with legacy behavior */}
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/featured" legacyBehavior>
              <a>Featured Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/new-posts" legacyBehavior>
              <a>New Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/all-posts" legacyBehavior>
              <a>All Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="http://website.com" legacyBehavior>
              <a>ಕನ್ನಡ</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
