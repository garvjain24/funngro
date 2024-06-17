import React from 'react';
import SEO from './SEO';

const About: React.FC = () => {
  return (
    <>
    <SEO title='About Funngro - Empowering Teens'
    description='Funngro connects teens with short-term tasks in web development, graphic design, and influencer marketing. Featured on Shark Tank India, revolutionizing the gig economy for teens.'
    keywords='Funngro
Teen gigs,
Web development for teens,
Graphic design for teens,
Influencer marketing for teens,
Shark Tank India,
Gig economy for teens,
Teen empowerment,
Short-term tasks for teens,
Teen freelancing opportunities,'/>
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Funngro</h2>
        <p className="text-xl mb-4">Funngro connects teens with short-term tasks in web development, graphic design, and influencer marketing.</p>
        <p className="text-xl">Featured on Shark Tank India, we are revolutionizing the gig economy for teens.</p>
      </div>
    </section>
    </>
  );
};

export default About;
