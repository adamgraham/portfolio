import '../styles/dock.css';
import { Icon, Link, SocialIcon, Theme } from '@zigurous/react-components'; // prettier-ignore
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
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
  return (
    <div className="dock">
      <div className="dock__container" id="primary">
        <div className="dock__section" id="navigation">
          {dockLinks.map(link => (
            <DockItem link={link} key={link.id} />
          ))}
        </div>
        <div className="dock__section" id="socials">
          {socialLinks.map(link => (
            <DockItem link={link} key={link.id} external />
          ))}
        </div>
        <div className="dock__section" id="gallery">
          <div className="dock__item" id="Previous">
            <button
              onClick={() => {
                if (!document) return;
                const e = new Event('previous_slide');
                document.dispatchEvent(e);
              }}
            >
              <Icon name="chevron_left" />
            </button>
            <div className="dock__tooltip">Previous</div>
          </div>
          <div className="dock__item" id="Next">
            <button
              onClick={() => {
                if (!document) return;
                const e = new Event('next_slide');
                document.dispatchEvent(e);
              }}
            >
              <Icon name="chevron_right" />
            </button>
            <div className="dock__tooltip">Next</div>
          </div>
        </div>
        <div className="dock__section" id="theme">
          <div className="dock__item" id="Theme">
            <button onClick={toggleTheme}>
              <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
            </button>
            <div className="dock__tooltip">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </div>
          </div>
        </div>
      </div>
      {secondaryLinks && (
        <div className="dock__container" id="secondary">
          {secondaryLinks.map(link => (
            <DockItem link={link} key={link.id || link.name} external />
          ))}
        </div>
      )}
    </div>
  );
}

export interface DockItemProps {
  link: LinkType;
  external?: boolean;
}

export function DockItem({ link, external = false }: DockItemProps) {
  return (
    <div className="dock__item" id={link.name}>
      <Link
        as={external ? 'a' : GatsbyLink}
        external={external}
        to={link.to}
        unstyled
      >
        {link.icon && <Icon name={link.icon} />}
        {link.socialIcon && (
          <SocialIcon icon={link.socialIcon} innerPadding={0} size={18} />
        )}
      </Link>
      <div className="dock__tooltip">{link.name}</div>
    </div>
  );
}
