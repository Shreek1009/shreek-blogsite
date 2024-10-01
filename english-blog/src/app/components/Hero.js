import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-96 relative">
        <Image src="/hero-image.jpg" alt="Hero Image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-lg mt-4">Enjoy our latest posts in English and Kannada.</p>
        </div>
      </div>
    </section>
  );
}
