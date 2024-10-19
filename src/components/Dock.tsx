import '../styles/dock.css';
import { Theme, useMediaQuery } from '@zigurous/react-components'; // prettier-ignore
import React, { useEffect, useRef, useState } from 'react';
import DockItem from './DockItem';
import { dockLinks, socialLinks } from '../links';
import type { LinkType } from '../types';

export interface DockProps {
  theme: Theme;
  toggleTheme: () => void;
  secondaryLinks?: LinkType[];
}

export default function Dock({
  theme,
  toggleTheme,
  secondaryLinks,
}: DockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const canHover = useMediaQuery('(hover: hover)');
  const [mouseState, setMouseState] = useState({ x: 0, y: 0, entered: false });

  useEffect(() => {
    if (!ref.current) return;

    const mouseleave = (e: MouseEvent) => {
      setMouseState({ x: e.clientX, y: e.clientY, entered: false });
    };
    const mousemove = (e: MouseEvent) => {
      setMouseState({ x: e.clientX, y: e.clientY, entered: true });
    };

    if (canHover) {
      ref.current.addEventListener('mousemove', mousemove);
      ref.current.addEventListener('mouseleave', mouseleave);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', mousemove);
        ref.current.removeEventListener('mouseleave', mouseleave);
      }
    };
  }, [ref, canHover]);

  return (
    <div className="dock" ref={ref}>
      <div className="dock__container" id="primary">
        <div className="dock__section" id="navigation">
          {dockLinks.map(link => (
            <DockItem key={link.id} link={link} mouseState={mouseState} />
          ))}
        </div>
        <div className="dock__section" id="socials">
          {socialLinks.map(link => (
            <DockItem
              key={link.id}
              link={link}
              mouseState={mouseState}
              external
            />
          ))}
        </div>
        <div className="dock__section" id="gallery">
          <DockItem
            asButton
            link={{
              to: '',
              id: 'previous',
              name: 'Previous',
              icon: 'chevron_left',
            }}
            mouseState={mouseState}
            onClick={() => {
              if (!document) return;
              const e = new Event('previous_slide');
              document.dispatchEvent(e);
            }}
          />
          <DockItem
            asButton
            link={{
              to: '',
              id: 'next',
              name: 'Next',
              icon: 'chevron_right',
            }}
            mouseState={mouseState}
            onClick={() => {
              if (!document) return;
              const e = new Event('next_slide');
              document.dispatchEvent(e);
            }}
          />
        </div>
        <div className="dock__section" id="theme">
          <DockItem
            asButton
            link={{
              to: '',
              id: 'theme',
              name: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
              icon: theme === 'dark' ? 'light_mode' : 'dark_mode',
            }}
            mouseState={mouseState}
            onClick={toggleTheme}
          />
        </div>
      </div>
      {secondaryLinks && (
        <div className="dock__container" id="secondary">
          {secondaryLinks.map(link => (
            <DockItem
              key={link.id || link.name}
              link={link}
              mouseState={mouseState}
              external
            />
          ))}
        </div>
      )}
    </div>
  );
}
