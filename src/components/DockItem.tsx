import { distance, Icon, inverseLerp, lerp, Link, socialIcons, useSmoothDamp } from '@zigurous/forge-react'; // prettier-ignore
import { Link as GatsbyLink } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import { type SocialLinkType } from '../links';

const settings = {
  minSize: 44,
  maxSize: 64,
  distance: 150,
  smoothTime: 50,
};

export interface DockItemProps {
  asButton?: boolean;
  external?: boolean;
  link: SocialLinkType;
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
  }, [mouseState]);

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
          {link.icon && <Icon icon={link.icon} size="inherit" />}
          {link.socialIcon && (
            <Icon
              icon={link.socialIcon}
              padding={0}
              size={iconSize - 2}
              type="social"
            />
          )}
        </button>
      ) : (
        <Link
          as={external ? 'a' : GatsbyLink}
          external={external}
          href={link.href}
          unstyled
        >
          {link.icon && (
            <Icon
              icon={link.icon}
              size="inherit"
              type={
                typeof link.icon === 'string' && link.icon in socialIcons
                  ? 'social'
                  : 'material'
              }
            />
          )}
          {link.socialIcon && (
            <Icon
              icon={link.socialIcon}
              padding={0}
              size={iconSize - 2}
              type="social"
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
