import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import AnimatedBackground from '../effects/AnimatedBackground';
import { SITE_CONFIG } from '../../constants/config';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (container && text) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = container.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(text, {
          duration: 1,
          x: x * 50,
          y: y * 50,
          rotationY: x * 10,
          rotationX: -y * 10,
          ease: 'power2.out',
        });
      };

      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000"
    >
      <AnimatedBackground />

      <div
        className="absolute inset-0 bg-gradient-to-b from-dark-300/50 to-dark-300/90"
        style={{ mixBlendMode: 'multiply' }}
      />

      <div
        ref={textRef}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 transform-style-3d"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-heading text-6xl md:text-8xl mb-6"
        >
          Your Story,{' '}
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
            Inked
          </span>{' '}
          Forever
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl mb-12 text-gray-300"
        >
          Professional tattoo artistry by {SITE_CONFIG.name}. {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-red-600 text-white rounded-full text-lg font-semibold transition-colors group"
          >
            Book Now
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 group-hover:translate-x-2 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </Link>

          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full text-lg font-semibold transition-all"
          >
            View Gallery
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;