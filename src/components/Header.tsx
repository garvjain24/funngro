import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const Header: React.FC = () => {
  return (
    <>
    <SEO
      title="Funngro - Opportunities for Teens" 
      description="At Funngro, teens can take up exciting short-term tasks in web development, graphic design, and influencer marketing. Start earning while building your skills."
      keywords="teens, freelance, web development, graphic design, influencer marketing"/>
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Funngro</Link>
        </h1>
        <nav>
          <Link to="/funngro/teen" className="px-4">Teen</Link>
          <Link to="/funngro/company" className="px-4">Company</Link>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
