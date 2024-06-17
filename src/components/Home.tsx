import React from 'react';
import HeroSection from './HeroSection';

import About from './About';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <About />
    </div>
  );
};

export default Home;
