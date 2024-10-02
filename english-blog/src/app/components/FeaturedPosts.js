import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPosts() {
  return (
    <section className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-4 shadow">
          {/* Use the new Image API */}
          <Image src="/featured1.jpg" width={300} height={200} alt="Post 1" style={{ objectFit: 'cover' }} />
          <h3 className="text-xl font-semibold mt-4">Post 1</h3>
          <p className="mt-2">A brief description of this post.</p>
          {/* Use the new Link API */}
          <Link href="/posts/1">Read More</Link>
        </div>
        <div className="border p-4 shadow">
          <Image src="/featured2.jpg" width={300} height={200} alt="Post 2" style={{ objectFit: 'cover' }} />
          <h3 className="text-xl font-semibold mt-4">Post 2</h3>
          <p className="mt-2">A brief description of this post.</p>
          <Link href="/posts/2">Read More</Link>
        </div>
      </div>
    </section>
  );
}
