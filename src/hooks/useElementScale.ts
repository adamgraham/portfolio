import { clamp, useIsomorphicLayoutEffect, useMemoizedRef } from '@zigurous/forge-react'; // prettier-ignore
import { useCallback, useEffect, useState } from 'react';

export function useElementScale<T extends HTMLElement>(): [
  number | undefined,
  React.RefCallback<T>,
] {
  const [element, ref] = useMemoizedRef<T>();
  const [scale, setScale] = useState<number>();

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined' && element) {
      setScale(clamp((window.innerWidth * 0.8) / element.offsetWidth, 1, 1.4));
    } else {
      setScale(undefined);
    }
  }, [element]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, [handleResize]);

  return [scale, ref];
}
