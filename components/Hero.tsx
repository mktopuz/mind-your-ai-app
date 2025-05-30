import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/ai_ocean_cyber/1920/1080" // New seed for a different image
          alt="Futuristic AI Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-darker via-neutral-darker/80 to-neutral-dark"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-light via-primary-DEFAULT to-accent-light animate-gradient-x bg-[200%_auto]">
            Mind Your AI
          </span>
          <span className="block mt-2 md:mt-4 text-neutral-light">Intelligent Solutions for a Smarter Future</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-DEFAULT mb-12 max-w-3xl mx-auto leading-relaxed">
          At Mind Your AI, we are at the forefront of transforming businesses through the power of artificial intelligence. Our mission is to empower companies with innovative AI solutions that streamline operations, enhance decision-making, and drive sustainable growth.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT hover:from-primary-dark hover:to-secondary-dark text-white font-semibold py-4 px-10 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block bg-transparent border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-neutral-darker font-semibold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-dark to-transparent"></div>
    </section>
  );
};

export default Hero;