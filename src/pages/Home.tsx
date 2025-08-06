import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
              Professional tattoo artistry by Suraj Artist. Creating unique and meaningful designs that tell your story.
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
      <section className="py-20 bg-dark-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl mb-4">Featured Work</h2>
            <p className="text-gray-400">Explore our latest masterpieces</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg aspect-square bg-dark-100"
              >
                <img
                  src={`/gallery/tattoo-${item}.jpg`}
                  alt={`Featured tattoo ${item}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Masterpiece {item}</h3>
                    <p className="text-gray-300">Custom design with attention to detail</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-primary hover:text-red-400 transition-colors"
            >
              View All Work <FaArrowRight />
            </Link>
          </div>
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
            {testimonials.map((testimonial, index) => (
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

const testimonials = [
  {
    text: "Suraj is incredibly talented and professional. He took my idea and transformed it into something even better than I imagined.",
    name: "Alex Smith",
    location: "Mumbai"
  },
  {
    text: "The attention to detail and creativity is outstanding. The studio is clean and welcoming. Highly recommend!",
    name: "Priya Patel",
    location: "Delhi"
  },
  {
    text: "Amazing experience from start to finish. The design process was collaborative and the final result exceeded my expectations.",
    name: "Rahul Kumar",
    location: "Bangalore"
  }
];

export default Home;