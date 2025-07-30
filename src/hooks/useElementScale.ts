import { clamp, useElementSize, useIsomorphicLayoutEffect } from '@zigurous/forge-react'; // prettier-ignore
import { useState } from 'react';

export function useElementScale(
  targetRef: React.RefObject<HTMLElement>,
): number {
  const size = useElementSize(targetRef);
  const [scale, setScale] = useState<number>(1);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setScale(clamp((window.innerWidth * 0.8) / size.width, 1, 1.4));
    }
  }, [size]);

  return scale;
}
