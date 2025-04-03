
import React, { useState } from 'react';

interface Philosopher {
  id: number;
  name: string;
  title: string;
  years: string;
  description: string;
  image: string;
  quote: string;
}

const philosophers: Philosopher[] = [
  {
    id: 1,
    name: "Socrates",
    title: "The Father of Western Philosophy",
    years: "470-399 BCE",
    description: "Known for the Socratic method, he challenged conventional wisdom through questioning. Despite writing nothing himself, his ideas were preserved by his students, particularly Plato.",
    image: "https://geosquadai.github.io/archeos/assets/img/socrates.jpg",
    quote: "The only true wisdom is in knowing you know nothing."
  },
  {
    id: 2,
    name: "Plato",
    title: "Founder of the Academy",
    years: "428-348 BCE",
    description: "Student of Socrates and teacher of Aristotle, Plato founded the Academy in Athens. His works explore justice, beauty, and equality in dialogues featuring Socrates as the main character.",
    image: "https://geosquadai.github.io/archeos/assets/img/plato.jpg",
    quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."
  },
  {
    id: 3,
    name: "Aristotle",
    title: "The First Scientist",
    years: "384-322 BCE",
    description: "Tutored by Plato and teacher to Alexander the Great, Aristotle established the Lyceum. His works cover physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, theater, music, rhetoric, psychology, and politics.",
    image: "https://geosquadai.github.io/archeos/assets/img/aristotle.jpg",
    quote: "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
  }
];

const Philosophers = () => {
  const [activePhilosopher, setActivePhilosopher] = useState<Philosopher>(philosophers[0]);

  return (
    <section id="philosophers" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://geosquadai.github.io/archeos/assets/img/athens-sunset.jpg" 
          alt="Ancient Athens Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-archeos-blue/30 to-archeos-dark/50"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-archeos-dark">
            Meet the <span className="text-archeos-gold">Great Thinkers</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Interact with the most influential philosophers of ancient Athens through our AI-powered historical recreations.
          </p>
        </div>

        {/* Philosopher Selector */}
        <div className="flex justify-center mb-12 space-x-4">
          {philosophers.map((philosopher) => (
            <button
              key={philosopher.id}
              onClick={() => setActivePhilosopher(philosopher)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activePhilosopher.id === philosopher.id
                  ? 'bg-archeos-gold text-white'
                  : 'bg-white/80 text-archeos-dark hover:bg-archeos-blue/20'
              }`}
            >
              {philosopher.name}
            </button>
          ))}
        </div>

        {/* Philosopher Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className="bg-white/90 p-8 rounded-xl shadow-xl animate-fade-in-right"
            key={activePhilosopher.id}
          >
            <h3 className="text-2xl font-bold text-archeos-dark mb-2">{activePhilosopher.name}</h3>
            <p className="text-archeos-blue font-medium mb-2">{activePhilosopher.title}</p>
            <p className="text-sm text-gray-500 mb-4">{activePhilosopher.years}</p>
            <blockquote className="italic text-lg border-l-4 border-archeos-gold pl-4 mb-6 text-gray-700">
              "{activePhilosopher.quote}"
            </blockquote>
            <p className="text-gray-700">{activePhilosopher.description}</p>
            <button className="mt-6 btn-primary">
              Interact with {activePhilosopher.name}
            </button>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fade-in-left">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-archeos-gold shadow-2xl">
              <img 
                src={activePhilosopher.image} 
                alt={activePhilosopher.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophers;
