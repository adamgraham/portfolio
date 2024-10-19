import { distance, Icon, inverseLerp, lerp, Link, SocialIcon, useSmoothDamp } from '@zigurous/react-components'; // prettier-ignore
import { Link as GatsbyLink } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import type { LinkType } from '../types';

const settings = {
  minSize: 44,
  maxSize: 64,
  minFontSize: 20,
  maxFontSize: 30,
  distance: 150,
  smoothTime: 50,
};

export interface DockItemProps {
  asButton?: boolean;
  external?: boolean;
  link: LinkType;
  mouseState: { x: number; y: number; entered: boolean };
  onClick?: () => void;
}

export default function DockItem({
  asButton = false,
  external = false,
  link,
  mouseState,
  onClick,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const targetSizeRef = useRef<number>(settings.minSize);
  const size = useSmoothDamp(
    settings.minSize,
    targetSizeRef,
    settings.smoothTime,
  );
  const iconSize = size * 0.45;

  useEffect(() => {
    if (!ref.current) return;
    if (mouseState.entered) {
      targetSizeRef.current = getSize(ref.current, mouseState.x, mouseState.y);
    } else {
      targetSizeRef.current = settings.minSize;
    }
  }, [ref, mouseState]);

  return (
    <div
      className="dock__item"
      id={link.id}
      ref={ref}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${iconSize}px`,
        transform: `translateY(${-(size - settings.minSize) / 2}px)`,
      }}
    >
      {asButton ? (
        <button onClick={onClick}>
          {link.icon && <Icon name={link.icon} size="inherit" />}
          {link.socialIcon && (
            <SocialIcon
              icon={link.socialIcon}
              innerPadding={0}
              size={iconSize - 2}
            />
          )}
        </button>
      ) : (
        <Link
          as={external ? 'a' : GatsbyLink}
          external={external}
          to={link.to}
          unstyled
        >
          {link.icon && <Icon name={link.icon} size="inherit" />}
          {link.socialIcon && (
            <SocialIcon
              icon={link.socialIcon}
              innerPadding={0}
              size={iconSize - 2}
            />
          )}
        </Link>
      )}
      <div className="dock__tooltip">{link.name}</div>
    </div>
  );
}

function getSize(el: HTMLDivElement, mouseX: number, mouseY: number) {
  const rect = el.getBoundingClientRect();
  const d = distance(
    mouseX,
    mouseY,
    rect.left + rect.width / 2,
    rect.top + rect.height / 2,
  );
  return lerp(
    settings.minSize,
    settings.maxSize,
    inverseLerp(settings.distance, 0, d),
  );
}
