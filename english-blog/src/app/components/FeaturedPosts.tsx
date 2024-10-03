// components/FeaturedPosts.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedPosts: React.FC = () => {
  return (
    <section className="container mx-auto mt-16 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image src="/featured1.jpg" width={300} height={200} alt="Post 1" className="rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-4">Post 1</h3>
          <p className="mt-2 text-gray-600">A brief description of this post.</p>
          <Link href="/posts/1" legacyBehavior>
            <a className="text-blue-500 hover:underline block mt-4">Read More</a>
          </Link>
        </div>
        <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image src="/featured2.jpg" width={300} height={200} alt="Post 2" className="rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-4">Post 2</h3>
          <p className="mt-2 text-gray-600">A brief description of this post.</p>
          <Link href="/posts/2" legacyBehavior>
            <a className="text-blue-500 hover:underline block mt-4">Read More</a>
          </Link>
        </div>
        {/* Add more posts if needed */}
      </div>
    </section>
  );
};

export default FeaturedPosts;
