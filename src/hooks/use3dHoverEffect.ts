import { useMediaQuery } from '@zigurous/forge-react';
import { useEffect } from 'react';

const defaultSettings = {
  max: 10,
  perspective: 1000,
  scale: 1,
  speed: 200,
  easing: 'ease-in-out',
};

export function use3dHoverEffect(
  targetRef: React.RefObject<HTMLElement>,
  settings: typeof defaultSettings = defaultSettings,
) {
  const canHover = useMediaQuery('(hover: hover)');

  useEffect(() => {
    if (!targetRef.current) return;
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;
    let transitioning = false;

    const handleEnter = (e: MouseEvent) => {
      handleMove(e);
      clearTimeout(timeoutId);

      if (targetRef.current) {
        targetRef.current.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
      }

      transitioning = true;
      timeoutId = setTimeout(() => {
        if (targetRef.current) {
          targetRef.current.style.transition = '';
        }
        transitioning = false;
      }, settings.speed);
    };

    const handleMove = (e: MouseEvent) => {
      if (transitioning) return;
      const card = targetRef.current;
      if (card) {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth / 2;
        const centerY = card.offsetTop + cardHeight / 2;
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
        if (targetRef.current) {
          targetRef.current.style.transform = `
            perspective(${
              settings.perspective
            }px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)
            scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})
          `;
        }
      }
    };

    if (canHover) {
      document.addEventListener('mouseenter', handleEnter);
      document.addEventListener('mousemove', handleMove);
    }

    return () => {
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mousemove', handleMove);

      if (targetRef.current) {
        targetRef.current.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
        targetRef.current.style.transform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }
    };
  }, [targetRef, settings, canHover]);
}
