import { clamp, useElementSize } from '@zigurous/react-components';
import { useLayoutEffect, useState } from 'react';

export function useElementScale(
  targetRef: React.RefObject<HTMLElement>,
): number {
  const size = useElementSize(targetRef);
  const [scale, setScale] = useState<number>(1);

  useLayoutEffect(() => {
    setScale(clamp((window.innerWidth * 0.8) / size.width, 1, 1.309));
  }, [size]);

  return scale;
}
