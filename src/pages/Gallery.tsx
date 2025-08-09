import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCard from '../components/gallery/GalleryCard';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/Full sleeve tattoo mahadevTattoo by-- @suraj___artist___.jpg',
    title: 'Full Sleeve Mahadev Tattoo',
    category: 'religious',
    description: 'Intricate full sleeve tattoo featuring Lord Mahadev with detailed spiritual elements.'
  },
  {
    id: 2,
    src: '/gallery/Full sleeve tattoo mahadevTattoo by-- @suraj___artist___ (1).jpg',
    title: 'Mahadev Sleeve Design',
    category: 'religious',
    description: 'Detailed sleeve tattoo showcasing the divine presence of Lord Shiva.'
  },
  {
    id: 3,
    src: '/gallery/Shiva tattoo🕉️🌸.jpg',
    title: 'Shiva with Om Symbol',
    category: 'religious',
    description: 'Beautiful composition combining Lord Shiva with the sacred Om symbol and floral elements.'
  },
  {
    id: 4,
    src: '/gallery/Tattoo by -- @suraj___artist___.jpg',
    title: 'Custom Design',
    category: 'custom',
    description: 'Unique custom tattoo design showcasing artistic creativity and precision.'
  },
  {
    id: 5,
    src: '/gallery/tattoo-1.jpg',
    title: 'Modern Art Design',
    category: 'modern',
    description: 'Contemporary tattoo design with bold lines and artistic expression.'
  },
  {
    id: 6,
    src: '/gallery/tattoo-2.jpg',
    title: 'Detailed Artwork',
    category: 'custom',
    description: 'Meticulously crafted custom design with intricate details.'
  },
  {
    id: 7,
    src: '/gallery/tattoo-3.jpg',
    title: 'Creative Pattern',
    category: 'modern',
    description: 'Modern pattern design with unique artistic elements.'
  },
  {
    id: 8,
    src: '/gallery/tattoo-4.jpg',
    title: 'Artistic Expression',
    category: 'custom',
    description: 'Personalized tattoo design showcasing creative artistry.'
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <main className="min-h-screen pt-20">
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl md:text-5xl mb-4">
              Tattoo Gallery
            </h1>
            <p className="text-gray-400 text-lg">
              Explore our collection of unique tattoo designs
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-full capitalize transition-all
                  ${selectedCategory === category
                    ? 'bg-primary text-white scale-105'
                    : 'bg-dark-200 text-gray-400 hover:bg-dark-100 hover:text-white'
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <GalleryCard
                    image={image}
                    onClick={() => setSelectedImage(image)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-dark-200 rounded-xl overflow-hidden"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;