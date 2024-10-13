import '../styles/dock.css';
import { Icon, Link, SocialIcon } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { dockLinks, socialLinks } from '../links';

const Dock = ({ theme, toggleTheme, secondaryLinks }) => {
  return (
    <div className="dock">
      <div className="dock__container" id="primary">
        <div className="dock__section" id="navigation">
          {dockLinks.map((link) => (
            <DockItem link={link} key={link.key} />
          ))}
        </div>
        <div className="dock__section" id="socials">
          {socialLinks.map((link) => (
            <DockItem link={link} key={link.key} external />
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
          {secondaryLinks.map((link) => (
            <DockItem link={link} key={link.key || link.name} external />
          ))}
        </div>
      )}
    </div>
  );
};

const DockItem = ({ link, external = false }) => {
  return (
    <div className="dock__item" id={link.name}>
      <Link
        ElementType={link.ElementType || (external ? 'a' : GatsbyLink)}
        external={external}
        to={link.to || link.url}
        unstyled
      >
        {link.icon ? (
          <Icon name={link.icon} />
        ) : (
          <SocialIcon iconName={link.key} innerPadding={0} size={18} />
        )}
      </Link>
      <div className="dock__tooltip">{link.name}</div>
    </div>
  );
};

export default Dock;
