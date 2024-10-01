import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800">Blog Name</div>
        <ul className="flex space-x-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/featured">Featured Posts</Link></li>
          <li><Link href="/new-posts">New Posts</Link></li>
          <li><Link href="/all-posts">All Posts</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="http://website.com">ಕನ್ನಡ</Link></li> {/* Link back to Kannada site */}
        </ul>
      </nav>
    </header>
  );
}
