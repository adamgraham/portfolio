import '../styles/dock.css';
import { type LinkType, type ThemeToken, useMediaQuery } from '@zigurous/forge-react'; // prettier-ignore
import React, { useState } from 'react';
import DockItem from './DockItem';
import { dockLinks, socialLinks } from '../links';

export interface DockProps {
  theme: ThemeToken;
  toggleTheme: Function;
  secondaryLinks?: LinkType[];
}

export default function Dock({
  theme,
  toggleTheme,
  secondaryLinks,
}: DockProps) {
  const canHover = useMediaQuery('(hover: hover)');
  const [mouseState, setMouseState] = useState({ x: 0, y: 0, entered: false });
  return (
    <div
      className="dock"
      onMouseMove={e => {
        if (canHover) {
          setMouseState({ x: e.clientX, y: e.clientY, entered: true });
        }
      }}
      onMouseLeave={e => {
        if (canHover) {
          setMouseState({ x: e.clientX, y: e.clientY, entered: false });
        }
      }}
    >
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
              href: '',
              id: 'previous',
              name: 'Previous',
              icon: 'chevron_left',
            }}
            mouseState={mouseState}
            onClick={() => {
              if (typeof document !== 'undefined') {
                const e = new Event('previous_slide');
                document.dispatchEvent(e);
              }
            }}
          />
          <DockItem
            asButton
            link={{
              href: '',
              id: 'next',
              name: 'Next',
              icon: 'chevron_right',
            }}
            mouseState={mouseState}
            onClick={() => {
              if (typeof document !== 'undefined') {
                const e = new Event('next_slide');
                document.dispatchEvent(e);
              }
            }}
          />
        </div>
        <div className="dock__section" id="theme">
          <DockItem
            asButton
            link={{
              href: '',
              id: 'theme',
              name: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
              icon: theme === 'dark' ? 'light_mode' : 'dark_mode',
            }}
            mouseState={mouseState}
            onClick={() => toggleTheme()}
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
