import React from 'react';
import {
  FeaturedProducts,
  Hero,
  NewArrivalsProducts,
  Services,
  Contact,
} from '../components';
const HomePage = () => {
  return (
    <main>
      <Hero />
      <NewArrivalsProducts />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
