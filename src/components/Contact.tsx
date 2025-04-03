
import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-archeos-marble">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-archeos-dark">
            Get <span className="text-archeos-blue">In Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about Archeos or interested in partnership opportunities? Contact our team or schedule a demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6 text-archeos-dark">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-archeos-blue"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-archeos-blue"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-archeos-blue"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-archeos-blue"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between animate-fade-in-left">
            <div className="bg-archeos-blue text-white rounded-xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-archeos-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-100">
                      115 Tech Innovation Hub,<br />
                      Athens, Greece 10558
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-archeos-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-100">info@archeos.tech</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-archeos-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-100">+30 21 0123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-archeos-dark text-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Schedule a Demo</h3>
              <p className="mb-6">
                Experience Archeos first-hand with a personalized demonstration from our team.
              </p>
              <button className="btn-secondary w-full">
                Book Demo Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
