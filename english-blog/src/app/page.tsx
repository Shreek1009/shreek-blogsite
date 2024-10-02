import React from 'react'; // Add this import
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import NewPosts from './components/NewPosts';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedPosts />
      <NewPosts />
      <Footer />
    </div>
  );
};

export default Home;
