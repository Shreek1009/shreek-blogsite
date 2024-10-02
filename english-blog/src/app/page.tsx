import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import FeaturedPosts from '../app/components/FeaturedPosts';
import NewPosts from '../app/components/NewPosts';
import Footer from '../app/components/Footer';

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
