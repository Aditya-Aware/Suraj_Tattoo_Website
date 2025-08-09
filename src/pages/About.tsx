import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  return (
    <main className="min-h-screen bg-dark-300">
      {/* Artist Introduction */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-red-500/20 rounded-lg blur-2xl opacity-50" />
              <img
                src="/gallery/475961582_18371841514137776_8765733456798583775_n.jpg"
                alt="Suraj Artist"
                className="w-full aspect-[4/3] object-cover rounded-lg shadow-xl relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-10 bg-gradient-to-r from-primary/10 to-red-500/10 rounded-full blur-3xl"
              />
              <h1 className="font-heading text-5xl md:text-6xl relative">
                About <span className="text-primary">Suraj Artist</span>
              </h1>
            </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over 10 years of experience in the tattoo industry, Suraj has
                established himself as one of the most sought-after tattoo artists in the
                region. His unique style blends traditional techniques with modern designs,
                creating truly personalized pieces for each client.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Specializing in both color and black & grey work, Suraj's portfolio
                showcases his versatility and attention to detail. From small, delicate
                pieces to large-scale custom designs, each tattoo is crafted with precision
                and artistic excellence.
              </p>
              <div className="flex gap-6 mt-4">
                <motion.a
                  href="https://www.instagram.com/suraj___artist___/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaInstagram size={32} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/chotu.sharma.92560281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaFacebook size={32} />
                </motion.a>
                <motion.a
                  href="https://wa.me/8319011341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaWhatsapp size={32} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Information */}
      <section className="py-32 bg-dark-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="relative inline-block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-10 bg-gradient-to-r from-primary/10 to-red-500/10 rounded-full blur-3xl"
              />
              <h2 className="font-heading text-5xl md:text-6xl mb-6 relative">
                The Studio
              </h2>
            </div>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              A clean, professional environment for your tattoo journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-300/50 backdrop-blur p-8 rounded-xl border border-gray-800/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="font-heading text-2xl mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Visit Us
            </h2>
            <p className="text-gray-400">
              Located in the heart of the city
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-dark-200 p-6 rounded-lg"
            >
              <h3 className="font-heading text-2xl mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Address:</strong>
                  <br />
                  Ashoka Garden
                  <br />
                  Bhopal, Madhya Pradesh 462023
                </p>
                <p>
                  <strong>Hours:</strong>
                  <br />
                  Monday - Saturday: 11:00 AM - 8:00 PM
                  <br />
                  Sunday: By Appointment Only
                </p>
                <p>
                  <strong>Phone:</strong>
                  <br />
                  +91 8319011341
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  surajartist123@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.292562909561!2d77.41849401534038!3d23.251112084832504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4276c6d78c8b%3A0xf7c48a7402b0e5b3!2sAshoka%20Garden%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!5e0!3m2!1sen!2sin!4v1723210000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

const studioFeatures = [
  {
    icon: '🏆',
    title: 'Professional Equipment',
    description: 'Using only the highest quality, sterilized equipment for your safety',
  },
  {
    icon: '🎨',
    title: 'Custom Designs',
    description: 'Every tattoo is uniquely designed to match your vision',
  },
  {
    icon: '🌟',
    title: 'Experienced Artist',
    description: '10+ years of experience in various tattoo styles',
  },
];

export default About;