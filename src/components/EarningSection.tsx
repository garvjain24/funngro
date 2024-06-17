import React from 'react';
import { FaUserPlus, FaUserCheck, FaProjectDiagram, FaBriefcase, FaDollarSign } from 'react-icons/fa';

const steps = [
  { icon: <FaUserPlus className="text-blue-500" />, title: 'Register', description: 'Sign up with Funngro and join our community.' },
  { icon: <FaUserCheck className="text-green-500" />, title: 'Complete Profile', description: 'Fill out your profile to showcase your skills and interests.' },
  { icon: <FaProjectDiagram className="text-yellow-500" />, title: 'Finish First Project', description: 'Complete your first project and gain experience.' },
  { icon: <FaBriefcase className="text-purple-500" />, title: 'Apply to Companies', description: 'Browse available projects and apply to companies.' },
  { icon: <FaDollarSign className="text-red-500" />, title: 'Start Earning', description: 'Get paid for your work and start building your career.' },
];

const EarningSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How to Start Earning with Funngro</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-6xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarningSection;
