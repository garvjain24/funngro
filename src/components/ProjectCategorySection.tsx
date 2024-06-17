import React from 'react';

// Define the project categories
const projectCategories = [
  { name: 'Social Media Marketing', icon: '📱' },
  { name: 'Video Creation', icon: '🎥' },
  { name: 'Website Design', icon: '🌐' },
  { name: 'Influencer Marketing', icon: '💼' },
  { name: 'Mobile App Development', icon: '📱' },
  { name: 'Campus Ambassador', icon: '🎓' },
  { name: 'Research and Survey', icon: '📊' },
  { name: 'Data Entry', icon: '⌨️' },
  { name: 'Voice Over', icon: '🎤' },
  { name: 'Content Writing', icon: '📝' },
  { name: 'Graphic Design', icon: '🎨' },
  { name: 'Testing', icon: '🔍' },
];

const ProjectCategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Project Categories</h2>
        <p className="text-xl mb-12">Hundreds of live project in each category. Register for categories of your choice in Funngro App and start working with companies.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projectCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-700">Explore tasks related to {category.name}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategorySection;
