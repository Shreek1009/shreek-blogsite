import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-96 relative">
        <Image src="/hero-image.jpg" alt="Hero Image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">ಸ್ವಾಗತ</h1>
          <p className="text-lg mt-4">ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ನಮ್ಮ ಹೊಸ ಲೇಖನಗಳನ್ನು ಆನಂದಿಸಿ</p>
        </div>
      </div>
    </section>
  );
}
