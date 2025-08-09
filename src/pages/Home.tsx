import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { SITE_CONFIG } from '../constants/config';

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-dark-300/70" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl mb-6">
              Your Story,{' '}
              <span className="text-primary">Inked</span> Forever
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Professional tattoo artistry by {SITE_CONFIG.name}. {SITE_CONFIG.description}
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Book Now <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.1),transparent_60%)]"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-red-500/20 absolute blur-2xl"
              />
              <span className="relative text-sm uppercase tracking-wider text-primary font-semibold">
                Our Portfolio
              </span>
            </motion.div>
            
            <motion.h2 
              className="font-heading text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-red-400 to-primary bg-300% animate-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Featured Work
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Explore our latest masterpieces and artistic creations
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 px-4 sm:px-6 md:px-0">
            {[
              {
                src: '/gallery/Full sleeve tattoo mahadevTattoo by-- @suraj___artist___.jpg',
                title: 'Mahadev Full Sleeve',
                description: 'Intricate spiritual design with detailed craftsmanship'
              },
              {
                src: '/gallery/Shiva tattoo🕉️🌸.jpg',
                title: 'Shiva with Om',
                description: 'Sacred design combining spirituality and artistry'
              },
              {
                src: '/gallery/Tattoo by -- @suraj___artist___.jpg',
                title: 'Custom Masterpiece',
                description: 'Unique design showcasing artistic excellence'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring", stiffness: 300
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-square bg-dark-100/50 backdrop-blur-lg border border-gray-700/30 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              >
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-dark-300/95 via-dark-300/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-xl sm:text-2xl font-semibold text-white mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-base sm:text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                  <motion.button
                    className="mt-4 px-6 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-white flex items-center gap-2 w-fit transition-colors duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ x: 5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    View Details <FaArrowRight className="text-sm" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 px-8 py-3 bg-primary/10 hover:bg-primary/20 rounded-full text-primary border border-primary/30 hover:border-primary transition-all duration-300"
            >
              <span className="text-lg">View All Work</span>
              <motion.span
                className="text-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-300/50 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl mb-4">Our Services</h2>
            <p className="text-gray-400">Professional tattoo services tailored to your vision</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-dark-200/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/30 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group"
              >
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="text-5xl mb-6 group-hover:scale-110 transition-transform"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl mb-4">Client Stories</h2>
            <p className="text-gray-400">What our clients say about their experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-dark-100/50 to-dark-200/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/30 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <motion.div 
                  initial={{ opacity: 0.5, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="absolute top-4 right-4 text-6xl text-primary/20 group-hover:text-primary/40 transition-colors"
                >
                  "
                </motion.div>
                <div className="relative z-10">
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed italic">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-xl font-bold text-white"
                    >
                      {testimonial.name[0]}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-lg text-white group-hover:text-primary transition-colors">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const services = [
  {
    icon: '🎨',
    title: 'Custom Designs',
    description: 'Unique tattoo designs created specifically for you, bringing your vision to life.',
  },
  {
    icon: '✨',
    title: 'Cover-Ups',
    description: 'Transform your old tattoos into beautiful new pieces that you\'ll love.',
  },
  {
    icon: '🔍',
    title: 'Consultations',
    description: 'Professional advice and planning to ensure your tattoo is perfect.',
  },
];



export default Home;