'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, MapPin, Smartphone, Clock, Heart, Download, Star, ArrowRight, Menu, X } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Easy Planning",
      description: "Create events with just a few clicks and invite friends to join"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Share with Friends",
      description: "Share your plans and see who's available to hang out"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Get instant notifications when plans change"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location & Routes",
      description: "Find the best spots and share your location easily"
    }
  ]

  const testimonials = [
    {
      name: "Sarah K.",
      text: "Free to Hang completely changed my social life! Now hanging out with friends is so simple.",
      rating: 5
    },
    {
      name: "Mike P.",
      text: "Great app for planning. I never miss an event anymore!",
      rating: 5
    },
    {
      name: "Emma L.",
      text: "Finally an app that actually works! I recommend it to everyone who loves spending time with friends.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Free to Hang</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Reviews</a>
              <a href="#download" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
                Download
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">Reviews</a>
              <a href="#download" className="block px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                Download
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Make hanging out with
                <span className="text-primary-600"> friends</span>
                <br />easier
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Free to Hang app makes hanging out with friends easier. Plan events, invite friends and find free time to spend together.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-full hover:bg-primary-700 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download for free
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 text-lg font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                >
                  View features
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3">
                  <div className="text-center">
                    <Smartphone className="w-24 h-24 text-primary-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Free to Hang</h3>
                    <p className="text-gray-600">Your new favorite app for hanging out with friends</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why choose Free to Hang?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our app is designed to make hanging out with friends as simple and enjoyable as possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group"
              >
                <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What our users say
            </h2>
            <p className="text-xl text-gray-600">
              Thousands of people already use Free to Hang app
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start with Free to Hang today
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Download the app and start hanging out with friends more easily. Free and always available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors min-w-[200px]">
                <Download className="w-5 h-5 mr-2" />
                App Store
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors min-w-[200px]">
                <Download className="w-5 h-5 mr-2" />
                Google Play
              </button>
            </div>

            <p className="text-primary-200 mt-6">
              Or visit web version: <span className="font-semibold">app.freetohang.com</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">Free to Hang</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Making hanging out with friends easier and more enjoyable. 
                Thousands of new meetups every day.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">App</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Free to Hang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 