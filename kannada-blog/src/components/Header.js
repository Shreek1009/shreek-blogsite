import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800">ಬ್ಲಾಗ್ ಹೆಸರು</div>
        <ul className="flex space-x-6 text-lg">
          <li><Link href="/">ಮುಖಪುಟ</Link></li>
          <li><Link href="/featured">ವಿಶಿಷ್ಟ ಲೇಖನಗಳು</Link></li>
          <li><Link href="/new-posts">ಹೊಸ ಲೇಖನಗಳು</Link></li>
          <li><Link href="/all-posts">ಎಲ್ಲಾ ಲೇಖನಗಳು</Link></li>
          <li><Link href="/about">ನಮ್ಮ ಬಗ್ಗೆ</Link></li>
          <li><Link href="/contact">ಸಂಪರ್ಕಿಸಿ</Link></li>
          <li><Link href="http://en.example.com">English</Link></li>
        </ul>
      </nav>
    </header>
  );
}
