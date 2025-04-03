
import React from 'react';
import { 
  Smartphone, 
  Globe, 
  BookOpen, 
  Map, 
  Video, 
  Headphones 
} from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="h-12 w-12 text-archeos-blue" />,
    title: "AR Navigation",
    description: "Experience ancient Athens through cutting-edge AR technology that overlays historical structures and people on modern locations."
  },
  {
    icon: <BookOpen className="h-12 w-12 text-archeos-blue" />,
    title: "AI Philosophers",
    description: "Engage with AI-powered historical figures capable of natural conversation about their philosophy, life, and ancient Athens."
  },
  {
    icon: <Globe className="h-12 w-12 text-archeos-blue" />,
    title: "Immersive Experience",
    description: "Step back in time with realistic recreations of ancient Athens, complete with accurate architecture, clothing, and customs."
  },
  {
    icon: <Map className="h-12 w-12 text-archeos-blue" />,
    title: "Location-based Learning",
    description: "Discover historical significance of actual locations as you walk through modern Athens with geolocation features."
  },
  {
    icon: <Video className="h-12 w-12 text-archeos-blue" />,
    title: "Visual Time Travel",
    description: "Visualize the transformation of Athens through different time periods with our before-and-after visual technology."
  },
  {
    icon: <Headphones className="h-12 w-12 text-archeos-blue" />,
    title: "Audio Narration",
    description: "Listen to expert historians narrate the rich history of each location as you explore the ancient city."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-archeos-marble">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-archeos-dark">
            Revolutionary Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Archeos combines cutting-edge AR technology with AI to create an unprecedented historical learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card flex flex-col items-center text-center p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 rounded-full bg-blue-50 p-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-archeos-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <img 
              src="https://geosquadai.github.io/archeos/assets/img/app-demo-1.png" 
              alt="Archeos App Demo" 
              className="w-full md:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            />
            <img 
              src="https://geosquadai.github.io/archeos/assets/img/app-demo-2.jpg" 
              alt="Archeos App Demo" 
              className="w-full md:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            />
          </div>
          <button className="btn-primary">
            Experience Archeos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
