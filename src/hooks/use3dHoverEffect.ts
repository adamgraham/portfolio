import { useMediaQuery, useMemoizedRef } from '@zigurous/forge-react';
import { useEffect } from 'react';

const defaultSettings = {
  max: 10,
  perspective: 1000,
  scale: 1,
  speed: 200,
  easing: 'ease-in-out',
};

export function use3dHoverEffect<T extends HTMLElement>(
  settings: typeof defaultSettings = defaultSettings,
): React.RefCallback<T> {
  const [element, ref] = useMemoizedRef<T>();
  const canHover = useMediaQuery('(hover: hover)');

  useEffect(() => {
    if (!element) return;
    if (typeof window === 'undefined') return;
    if (typeof document === 'undefined') return;

    let timeoutId: NodeJS.Timeout;
    let transitioning = false;

    const handleEnter = (e: MouseEvent) => {
      handleMove(e);
      clearTimeout(timeoutId);

      if (element) {
        element.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
      }

      transitioning = true;
      timeoutId = setTimeout(() => {
        if (element) {
          element.style.transition = '';
        }
        transitioning = false;
      }, settings.speed);
    };

    const handleMove = (e: MouseEvent) => {
      if (transitioning) return;
      if (element) {
        const cardWidth = element.offsetWidth;
        const cardHeight = element.offsetHeight;
        const centerX = element.offsetLeft + cardWidth / 2;
        const centerY = element.offsetTop + cardHeight / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateXUncapped =
          +1 * ((settings.max * mouseY) / (cardHeight / 2));
        const rotateYUncapped =
          -1 * ((settings.max * mouseX) / (cardWidth / 2));
        const rotateX =
          rotateXUncapped < -settings.max
            ? -settings.max
            : rotateXUncapped > settings.max
              ? settings.max
              : rotateXUncapped;
        const rotateY =
          rotateYUncapped < -settings.max
            ? -settings.max
            : rotateYUncapped > settings.max
              ? settings.max
              : rotateYUncapped;
        element.style.transform = `
            perspective(${
              settings.perspective
            }px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)
            scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})
          `;
      }
    };

    if (canHover) {
      document.addEventListener('mouseenter', handleEnter);
      document.addEventListener('mousemove', handleMove);
    }

    return () => {
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mousemove', handleMove);

      if (element) {
        element.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
        element.style.transform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }
    };
  }, [element, canHover, settings]);

  return ref;
}
