
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 w-full h-full">
        <div ref={parallaxRef} className="absolute inset-0 w-full h-[120%]">
          <img
            src="https://geosquadai.github.io/archeos/assets/img/athens-acropolis.jpg"
            alt="Ancient Athens"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Experience Athens <span className="text-archeos-gold">Through Time</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
          Walk alongside Socrates, debate with Plato, and learn from Aristotle in an immersive augmented reality experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <button className="btn-primary flex items-center justify-center gap-2">
            <span>Download App</span>
          </button>
          <button className="btn-secondary flex items-center justify-center gap-2">
            <span>Learn More</span>
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToFeatures}
        >
          <ChevronDown className="text-white h-10 w-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
