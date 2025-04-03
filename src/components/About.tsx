
import React from 'react';
import { Award, Users, Building, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-archeos-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Revolutionizing <span className="text-archeos-gold">Historical Education</span>
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Archeos is an innovative AR/AI application that brings ancient Athens to life through a combination of cutting-edge augmented reality technology and artificial intelligence.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Our mission is to transform how people learn about and experience history by creating immersive, interactive encounters with the past that are both educational and entertaining.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <Award className="text-archeos-gold h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Award-Winning</h3>
                  <p className="text-sm text-gray-300">Recognized for innovation in educational technology</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="text-archeos-gold h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Expert Team</h3>
                  <p className="text-sm text-gray-300">Historians, tech specialists, and designers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Building className="text-archeos-gold h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Cultural Partners</h3>
                  <p className="text-sm text-gray-300">Collaborations with museums and universities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <TrendingUp className="text-archeos-gold h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Growing Fast</h3>
                  <p className="text-sm text-gray-300">20,000+ downloads since launch</p>
                </div>
              </div>
            </div>
            
            <button className="btn-secondary">
              Our Research Approach
            </button>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <img 
                src="https://geosquadai.github.io/archeos/assets/img/app-showcase.png" 
                alt="Archeos App Showcase" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-archeos-blue text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-3xl font-bold mb-1">85%</p>
                <p className="text-sm">Higher engagement vs traditional learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
