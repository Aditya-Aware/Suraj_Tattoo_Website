import { motion } from 'framer-motion';

interface GalleryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const GalleryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: GalleryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`
            px-6 py-2 rounded-full capitalize transition-colors
            ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-dark-200 text-gray-400 hover:bg-dark-100'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default GalleryFilter;