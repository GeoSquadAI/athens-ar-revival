
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-archeos-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="https://geosquadai.github.io/archeos/assets/img/archeos-logo-white.png" 
              alt="Archeos Logo" 
              className="h-10 mb-6"
            />
            <p className="text-gray-300 mb-6">
              Bringing ancient Athens to life through augmented reality and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-archeos-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-archeos-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-archeos-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-archeos-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-archeos-gold transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-archeos-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#philosophers" className="text-gray-300 hover:text-white transition-colors">Philosophers</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-archeos-gold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Download App</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">API</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Press Kit</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-archeos-gold">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on new features and releases.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-l-md flex-grow focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-archeos-gold text-white px-4 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Archeos. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
