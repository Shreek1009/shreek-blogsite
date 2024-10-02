import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedPosts: React.FC = () => {
  return (
    <section className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-4 shadow">
          {/* Use the new Image API */}
          <Image src="/featured1.jpg" width={300} height={200} alt="Post 1" style={{ objectFit: 'cover' }} />
          <h3 className="text-xl font-semibold mt-4">Post 1</h3>
          <p className="mt-2">A brief description of this post.</p>
          {/* Correct usage of Link with legacyBehavior */}
          <Link href="/posts/1" legacyBehavior>
            <a className="text-blue-500 hover:underline">Read More</a>
          </Link>
        </div>
        <div className="border p-4 shadow">
          <Image src="/featured2.jpg" width={300} height={200} alt="Post 2" style={{ objectFit: 'cover' }} />
          <h3 className="text-xl font-semibold mt-4">Post 2</h3>
          <p className="mt-2">A brief description of this post.</p>
          <Link href="/posts/2" legacyBehavior>
            <a className="text-blue-500 hover:underline">Read More</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
