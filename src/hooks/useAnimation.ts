import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseAnimationProps {
  threshold?: number;
  once?: boolean;
  delay?: number;
}

const useAnimation = (ref: React.RefObject<HTMLElement>, {
  threshold = 0.1,
  once = true,
  delay = 0
}: UseAnimationProps = {}) => {
  const isInView = useInView(ref, { once, threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, delay]);

  return {
    shouldAnimate: isInView && !hasAnimated,
    hasAnimated
  };
};

export default useAnimation;