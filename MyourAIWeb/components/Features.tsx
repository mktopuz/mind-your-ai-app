import React from 'react';
import ServiceCard from './FeatureCard'; // Corrected import path
import { ServiceItem } from '../types';

// SVG Icons remain the same, their color is 'currentColor' so they inherit from parent.
const ConsultingIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M8.25 21v-1.5m11.25-11.25H21M3 12.75h1.5m16.5 0H21m-9-9.75v1.5M12 3.75v16.5M4.5 12.75A7.5 7.5 0 0 1 12 5.25v0A7.5 7.5 0 0 1 19.5 12.75m0 0A7.5 7.5 0 0 1 12 20.25v0A7.5 7.5 0 0 1 4.5 12.75M12 12.75h-.008v.015H12v-.015Zm0 0H12m0 0h.008v.015H12v-.015Zm0 0h-.008v.015H12v-.015Zm0 0h.008v.015H12v-.015Z" />
  </svg>
);

const EducationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);

const DubbingIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6V7.5a6 6 0 00-12 0v5.25a6 6 0 006 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 10.572a9 9 0 10-14.228 0M12 21.75V18.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75h9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75h6" />
  </svg>
);

const DevelopmentIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);


const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: <ConsultingIcon />,
    title: 'AI Consulting Solutions',
    description: 'We provide tailored AI strategies that align with your business goals, helping you navigate the complexities of AI adoption with ease and confidence.',
  },
  {
    id: 2,
    icon: <EducationIcon />,
    title: 'Educational AI Tools',
    description: 'Equip your team with cutting-edge AI tools and training programs designed to foster innovation and keep you ahead in a rapidly evolving technological landscape.',
  },
  {
    id: 3,
    icon: <DubbingIcon />,
    title: 'Multilingual Dubbing Services',
    description: 'Break down language barriers with our advanced AI-driven dubbing solutions, enabling your content to reach a global audience in any language.',
  },
  {
    id: 4,
    icon: <DevelopmentIcon />,
    title: 'Custom AI Development',
    description: 'Our team of experts develops bespoke AI applications and systems that address your unique challenges, ensuring maximum efficiency and competitive advantage.',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-dark/70 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-secondary-light via-primary-DEFAULT to-accent-light animate-gradient-x bg-[200%_auto]">
            Our AI Services
          </h2>
          <p className="text-lg text-neutral-DEFAULT max-w-2xl mx-auto leading-relaxed">
            We combine strategic insight with technical expertise to deliver high-value AI use cases from proof of concept to full-scale implementation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;