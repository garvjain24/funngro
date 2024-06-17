import React from 'react';

// Example data for counters (this can be replaced with props or data from an API)
const counters = [
  { label: 'TeenLancers', value: 2000000 },
  { label: 'Companies', value: 3500 },
  { label: 'Live Projects', value: 1000 },
  { label: 'Categories', value: 12 },
];

const CounterSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
        <div className="flex flex-wrap justify-center">
          {counters.map((counter, index) => (
            <div key={index} className="max-w-xs m-4 p-6 bg-white rounded shadow-lg">
              <div className="text-5xl font-bold text-blue-600">{counter.value}</div>
              <div className="text-lg font-medium text-gray-700">{counter.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
