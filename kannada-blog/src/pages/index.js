import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Custom styles

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <h1>ಬ್ಲಾಗ್ ಹೆಸರು</h1> {/* Blog Name in Kannada */}
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/">ಮುಖಪುಟ</Link></li> {/* Home */}
            <li><Link href="/featured">ವಿಶಿಷ್ಟ ಪೋಸ್ಟ್</Link></li> {/* Featured Posts */}
            <li><Link href="/new-posts">ಹೊಸ ಪೋಸ್ಟ್</Link></li> {/* New Posts */}
            <li><Link href="/all-posts">ಎಲ್ಲಾ ಪೋಸ್ಟ್</Link></li> {/* All Posts */}
            <li><Link href="/about">ನಮ್ಮ ಬಗ್ಗೆ</Link></li> {/* About */}
            <li><Link href="/contact">ಸಂಪರ್ಕಿಸಿ</Link></li> {/* Contact Us */}
            <li><Link href="http://en.example.com">English</Link></li> {/* Link to English subdomain */}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          {/* You can use a large banner image */}
          <Image src="/hero-image.jpg" alt="Hero Image" width={1200} height={400} />
        </div>
        <div className={styles.heroText}>
          <h2>ಸ್ವಾಗತ</h2>
          <p>ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ನಮ್ಮ ಹೊಸ ಲೇಖನಗಳನ್ನು ಆನಂದಿಸಿ</p>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className={styles.featuredPosts}>
        <h2>ವಿಶಿಷ್ಟ ಲೇಖನಗಳು</h2>
        <div className={styles.postsGrid}>
          {/* Add 3-4 Featured Posts */}
          <div className={styles.postCard}>
            <Image src="/featured1.jpg" alt="Featured Post 1" width={300} height={200} />
            <h3>ಪೋಸ್ಟ್ 1</h3>
            <p>ಈ ಲೇಖನದ ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ.</p>
            <Link href="/posts/1">ಓದಿ</Link>
          </div>
          <div className={styles.postCard}>
            <Image src="/featured2.jpg" alt="Featured Post 2" width={300} height={200} />
            <h3>ಪೋಸ್ಟ್ 2</h3>
            <p>ಈ ಲೇಖನದ ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ.</p>
            <Link href="/posts/2">ಓದಿ</Link>
          </div>
          {/* Add more cards similarly */}
        </div>
      </section>

      {/* New Posts Section */}
      <section className={styles.newPosts}>
        <h2>ಹೊಸ ಲೇಖನಗಳು</h2>
        <div className={styles.postsGrid}>
          <div className={styles.postCard}>
            <Image src="/new1.jpg" alt="New Post 1" width={300} height={200} />
            <h3>ಪೋಸ್ಟ್ 3</h3>
            <p>ಹೊಸ ಲೇಖನ 1 ವಿವರಣೆ.</p>
            <Link href="/posts/3">ಓದಿ</Link>
          </div>
          <div className={styles.postCard}>
            <Image src="/new2.jpg" alt="New Post 2" width={300} height={200} />
            <h3>ಪೋಸ್ಟ್ 4</h3>
            <p>ಹೊಸ ಲೇಖನ 2 ವಿವರಣೆ.</p>
            <Link href="/posts/4">ಓದಿ</Link>
          </div>
          {/* Add more cards similarly */}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 BlogName</p>
        <ul className={styles.footerLinks}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
        </ul>
      </footer>
    </div>
  );
}
