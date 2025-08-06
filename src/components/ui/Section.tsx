import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

const Section = ({
  children,
  className = '',
  title,
  subtitle,
  dark = false,
}: SectionProps) => {
  return (
    <section className={`py-16 ${dark ? 'bg-dark-200' : ''} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="font-heading text-4xl md:text-5xl mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-gray-400 text-lg">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;