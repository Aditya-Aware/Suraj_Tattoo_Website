import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GalleryImage as GalleryImageType } from '../../types';

interface GalleryImageProps {
  image: GalleryImageType;
  onClick: () => void;
}

const GalleryImage = ({ image, onClick }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-lg cursor-zoom-in"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-dark-200 animate-pulse" />
      )}

      {/* Image */}
      <img
        src={image.src}
        alt={image.title}
        className={`w-full h-full object-cover transition-all duration-300 hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg">{image.title}</h3>
          <p className="text-gray-300 text-sm capitalize">{image.category}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryImage;