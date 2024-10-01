import Image from 'next/image';
import Link from 'next/link';

export default function NewPosts() {
  return (
    <section className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-8">New Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-4 shadow">
          <Image src="/new1.jpg" alt="New Post 1" width={300} height={200} />
          <h3 className="text-xl font-semibold mt-4">New Post 1</h3>
          <p className="mt-2">Brief description of the new post.</p>
          <Link href="/posts/3"><a className="text-blue-500 mt-4 block">Read More</a></Link>
        </div>
        <div className="border p-4 shadow">
          <Image src="/new2.jpg" alt="New Post 2" width={300} height={200} />
          <h3 className="text-xl font-semibold mt-4">New Post 2</h3>
          <p className="mt-2">Brief description of the new post.</p>
          <Link href="/posts/4"><a className="text-blue-500 mt-4 block">Read More</a></Link>
        </div>
        {/* Add more posts */}
      </div>
    </section>
  );
}
