// components/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-800 text-white">
      <div className="relative h-[500px]">
        {/* Full-screen image */}
        <Image
          src="/hero-image.jpg"
          fill
          alt="Hero Image"
          style={{ objectFit: 'cover' }}
          className="opacity-80"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-xl">Discover amazing content in English</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
