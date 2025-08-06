import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  return (
    <main className="pt-20">
      {/* Artist Introduction */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/artist-profile.jpg"
                alt="Suraj Artist"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl mb-6">
                About <span className="text-primary">Suraj Artist</span>
              </h1>
              <p className="text-gray-300 mb-6">
                With over 10 years of experience in the tattoo industry, Suraj has
                established himself as one of the most sought-after tattoo artists
                in the region. His unique style blends traditional techniques with
                modern designs, creating truly personalized pieces for each client.
              </p>
              <p className="text-gray-300 mb-6">
                Specializing in both color and black & grey work, Suraj's
                portfolio showcases his versatility and attention to detail. From
                small, delicate pieces to large-scale custom designs, each tattoo
                is crafted with precision and artistic excellence.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-200 p-3 rounded-full hover:bg-primary transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-200 p-3 rounded-full hover:bg-primary transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-200 p-3 rounded-full hover:bg-primary transition-colors"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Information */}
      <section className="py-12 bg-dark-200">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              The Studio
            </h2>
            <p className="text-gray-400">
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
                className="bg-dark-100 p-6 rounded-lg text-center"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
                  123 Tattoo Street
                  <br />
                  Mumbai, Maharashtra 400001
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
                  +91 1234567890
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  info@surajartist.com
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.0864614358275!2d72.82766745872192!3d18.92971799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1de2777cd3f%3A0x9eec229bfb7b54b7!2sColaba%20Causeway!5e0!3m2!1sen!2sin!4v1635835837264!5m2!1sen!2sin"
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