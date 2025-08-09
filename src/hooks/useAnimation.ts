import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseAnimationProps {
  once?: boolean;
  delay?: number;
}

const useAnimation = (ref: React.RefObject<HTMLElement>, {
  once = true,
  delay = 0
}: UseAnimationProps = {}) => {
  const isInView = useInView(ref, { once });
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