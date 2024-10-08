import { useEffect, useLayoutEffect, useState } from 'react';
import { clamp } from '../utils/clamp';

export function useElementSize(targetRef) {
  const getSize = () => {
    return {
      width: targetRef.current?.offsetWidth ?? 0,
      height: targetRef.current?.offsetHeight ?? 0,
    };
  };

  const [size, setSize] = useState(getSize);
  const [scale, setScale] = useState(1);

  const handleResize = () => {
    const size = getSize();
    setSize(getSize());
    if (typeof window !== 'undefined') {
      setScale(clamp((window.innerWidth * 0.8) / size.width, 1, 1.309));
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return [size, scale];
}
