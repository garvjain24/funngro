import React from 'react';

const CompanyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8">Services for Companies</h2>
      <p className="text-xl mb-4">
        Hire talented teens for short-term projects. Whether you need help with web development, graphic design, or influencer marketing, our pool of young talent is ready to assist your company.
      </p>
      <div className="mt-8">
        <a href="#contact" className="bg-blue-600 text-white py-2 px-4 rounded">Get Started</a>
      </div>
    </div>
  );
};

export default CompanyPage;

