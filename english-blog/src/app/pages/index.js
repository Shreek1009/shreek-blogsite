import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import NewPosts from '../components/NewPosts';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedPosts />
      <NewPosts />
      <Footer />
    </div>
  );
}
