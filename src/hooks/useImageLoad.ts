import { useState, useEffect } from 'react';

interface UseImageLoadProps {
  src: string;
  onLoad?: () => void;
  onError?: () => void;
}

const useImageLoad = ({ src, onLoad, onError }: UseImageLoadProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setIsLoading(false);
      setImageSrc(src);
      onLoad?.();
    };

    img.onerror = () => {
      setIsLoading(false);
      setError(new Error('Failed to load image'));
      onError?.();
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return { isLoading, error, imageSrc };
};

export default useImageLoad;