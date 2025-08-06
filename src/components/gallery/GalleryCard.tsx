import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GalleryCardProps {
  image: {
    src: string;
    title: string;
    category: string;
  };
  onClick: () => void;
}

const GalleryCard = ({ image, onClick }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Background glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        className="absolute inset-0 bg-primary/20 blur-xl"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(-50px)" }}
      />

      {/* Image */}
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(0px)" }}
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-dark-300/90 via-dark-300/50 to-transparent"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h3
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-xl font-bold text-white mb-2"
            >
              {image.title}
            </motion.h3>
            <motion.p
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-gray-300 text-sm"
            >
              {image.category}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Shine effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.4 : 0,
          backgroundImage: isHovered
            ? "linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)"
            : "none",
        }}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
      />
    </motion.div>
  );
};

export default GalleryCard;