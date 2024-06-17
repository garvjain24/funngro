import React from 'react';

// Company logos (These are just placeholder URLs. Replace with actual paths or URLs)
import CarDekhoLogo from '../assets/car-dekho-logo.png';
import EnergySolarLogo from '../assets/energy-solar-logo.png';
import TarrakiLogo from '../assets/tarraki-logo.png';
import EcoLogo from '../assets/eco365-logo.png';

const companies = [
  { name: 'Car Dekho', logo: CarDekhoLogo },
  { name: 'Energy Solar', logo: EnergySolarLogo },
  { name: 'Tarraki', logo: TarrakiLogo },
 { name: 'Eco', logo: EcoLogo }
];

const TrustedBySection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-500">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Trusted By Leading Companies</h2>
        <div className="flex flex-wrap justify-center items-center space-x-8">
          {companies.map((company, index) => (
            <div key={index} className="p-4">
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="max-h-24 mx-auto transform hover:scale-110 transition duration-300 ease-in-out"
              />
              <p className="mt-4 text-xl">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
