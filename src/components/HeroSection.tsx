import React from 'react';
import SEO from './SEO';

const HeroSection: React.FC = () => {
  return (
    <>
    <SEO 
      title="Funngro - Opportunities for Teens" 
      description="At Funngro, teens can take up exciting short-term tasks in web development, graphic design, and influencer marketing. Start earning while building your skills."
      keywords="teens, freelance, web development, graphic design, influencer marketing"/>
    <header className="bg-gray-100 text-center py-20">
      <div className="container mx-auto">
        <img 
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png" 
          alt="Funngro Logo" 
          className="mx-auto mb-8 max-w-xs sm:max-w-sm lg:max-w-md"
        />
        <h1 className="text-4xl font-bold mb-4">Empowering Teens with Short-Term Tasks</h1>
        <p className="text-xl mb-8">Get paid for web development, graphic design, and influencer marketing tasks.</p>
      </div>
    </header>
    </>
  );
};

export default HeroSection;
