import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-neutral-dark p-8 rounded-xl shadow-2xl border border-neutral-dark hover:border-primary-dark hover:shadow-primary-DEFAULT/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full">
      <div className="flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-gradient-to-br from-primary-DEFAULT via-secondary-DEFAULT to-accent-DEFAULT text-white text-4xl shadow-lg">
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-neutral-lightest">{service.title}</h3>
      <p className="text-neutral-DEFAULT leading-relaxed flex-grow">{service.description}</p>
    </div>
  );
};

export default ServiceCard;