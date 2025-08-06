import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage as GalleryImageType } from '../../types';
import GalleryImage from './GalleryImage';

interface GalleryGridProps {
  images: GalleryImageType[];
  onImageClick: (image: GalleryImageType) => void;
}

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <AnimatePresence mode="wait">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <GalleryImage
              image={image}
              onClick={() => onImageClick(image)}
            />
          </motion.div>
        ))}
      </Masonry>
    </AnimatePresence>
  );
};

export default GalleryGrid;