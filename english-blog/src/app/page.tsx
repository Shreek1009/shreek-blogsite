// pages/index.tsx
import React from 'react';
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import FeaturedPosts from '../app/components/FeaturedPosts';
import NewPosts from '../app/components/NewPosts';
import Footer from '../app/components/Footer';

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
