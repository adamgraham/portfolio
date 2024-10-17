import '../styles/header.css';
import { Button, NavBar } from '@zigurous/react-components';
import { Link as GatsbyLink, navigate } from 'gatsby';
import React, { useState } from 'react';
import Logo from './Logo';
import MenuGallery from './MenuGallery';
import { headerLinks } from '../links';

export interface HeaderProps {
  location?: Location;
  pageTitle?: string;
}

export default function Header({ location, pageTitle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__container container-fluid">
          <Logo size={44} />
          <NavBar
            links={headerLinks}
            LinkElementType={GatsbyLink}
            location={location}
          />
          {pageTitle && (
            <Button
              className="header__title-button"
              onClick={() => {
                const link = headerLinks.find(link => link.name === pageTitle);
                if (link) {
                  navigate(link.to);
                } else {
                  setIsMenuOpen(true);
                }
              }}
              style="unstyled"
            >
              {pageTitle}
            </Button>
          )}
          <button
            aria-label={isMenuOpen ? 'Close Gallery Menu' : 'Open Gallery Menu'}
            className="header__menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36px"
                height="36px"
              >
                <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36px"
                height="36px"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            )}
          </button>
        </div>
      </header>
      <MenuGallery
        open={isMenuOpen}
        onRequestClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
