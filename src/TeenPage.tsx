import React from 'react';
import HeroSection from './components/HeroSection';
import CounterSection from './components/CounterSection';
import BenefitsSection from './components/BenifitsSection';
import SEO from './components/SEO';
import ProjectCategorySection from './components/ProjectCategorySection';
import TrustedBySection from './components/TrustedBySection';
import EarningSection from './components/EarningSection';

const TeenPage: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Funngro - Opportunities for Teens" 
        description="At Funngro, teens can take up exciting short-term tasks in web development, graphic design, and influencer marketing. Start earning while building your skills."
        keywords="teens, freelance, web development, graphic design, influencer marketing"
      />
      <HeroSection />
      <CounterSection/>
      <BenefitsSection/>
      <ProjectCategorySection/>
      <TrustedBySection/>
      <EarningSection/>
    </div>
  );
};

export default TeenPage;
