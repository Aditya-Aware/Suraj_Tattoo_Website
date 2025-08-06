import { motion } from 'framer-motion';
import Card from './Card';

interface TestimonialCardProps {
  text: string;
  name: string;
  location: string;
  image?: string;
  delay?: number;
}

const TestimonialCard = ({
  text,
  name,
  location,
  image,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <p className="text-gray-300 mb-4">{text}</p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
            {image && (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-400 text-sm">{location}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;