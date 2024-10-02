import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPosts() {
  return (
    <section className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-8">ವಿಶಿಷ್ಟ ಲೇಖನಗಳು</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-4 shadow">
          <Image src="/featured1.jpg" alt="Post 1" width={300} height={200} />
          <h3 className="text-xl font-semibold mt-4">ಪೋಸ್ಟ್ 1</h3>
          <p className="mt-2">ಈ ಲೇಖನದ ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ.</p>
          <Link href="/posts/1"><a className="text-blue-500 mt-4 block">ಓದಿ</a></Link>
        </div>
        <div className="border p-4 shadow">
          <Image src="/featured2.jpg" alt="Post 2" width={300} height={200} />
          <h3 className="text-xl font-semibold mt-4">ಪೋಸ್ಟ್ 2</h3>
          <p className="mt-2">ಈ ಲೇಖನದ ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ.</p>
          <Link href="/posts/2"><a className="text-blue-500 mt-4 block">ಓದಿ</a></Link>
        </div>
        {/* Add more posts */}
      </div>
    </section>
  );
}
