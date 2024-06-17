import React from 'react';
import { FaMoneyBillWave, FaHeart, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-4xl mb-4" />,
    title: 'First Income',
    description: 'Earn your first income by taking up tasks that match your skills and interests.',
  },
  {
    icon: <FaHeart className="text-red-600 text-4xl mb-4" />,
    title: 'Passion',
    description: 'Work on projects that you are passionate about and build a portfolio.',
  },
  {
    icon: <FaGraduationCap className="text-green-600 text-4xl mb-4" />,
    title: 'Learning',
    description: 'Gain practical experience and learn new skills through real-world projects.',
  },
  {
    icon: <FaCertificate className="text-yellow-600 text-4xl mb-4" />,
    title: 'Certification',
    description: 'Receive certifications for your completed tasks and enhance your resume.',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Work as a Teen?</h2>
        <div className="flex flex-wrap justify-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="max-w-xs m-4 p-6 bg-gray-100 rounded shadow-lg">
              {benefit.icon}
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-lg text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
