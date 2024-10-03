// components/NewPosts.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewPosts: React.FC = () => {
  return (
    <section className="container mx-auto mt-16 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">New Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image src="/new1.jpg" alt="New Post 1" width={300} height={200} className="rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-4">New Post 1</h3>
          <p className="mt-2 text-gray-600">Brief description of the new post.</p>
          <Link href="/posts/3" legacyBehavior>
            <a className="text-blue-500 hover:underline block mt-4">Read More</a>
          </Link>
        </div>
        <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image src="/new2.jpg" alt="New Post 2" width={300} height={200} className="rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-4">New Post 2</h3>
          <p className="mt-2 text-gray-600">Brief description of the new post.</p>
          <Link href="/posts/4" legacyBehavior>
            <a className="text-blue-500 hover:underline block mt-4">Read More</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewPosts;
