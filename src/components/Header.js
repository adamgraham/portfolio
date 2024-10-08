import '../styles/header.css';
import { Link, NavBar, SocialNavLinks } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GalleryContext from './GalleryContext';
import { navLinks, socialLinks } from '../links';
import { titleCase } from '../utils/formatting';

const Header = ({ location, isMenuOpen, toggleMenu }) => {
  const gallery = useContext(GalleryContext);
  return (
    <header className="header">
      <div className="header__container container-fluid">
        <div>
          <Link className="logo h4" ElementType={GatsbyLink} to="/" unstyled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="44px"
              height="44px"
            >
              <polygon points="345.17 257.56 233.75 257.56 212.47 294.58 324.06 294.58 382.6 396.41 425 396.41 345.17 257.56" />
              <polygon points="168.69 322.35 254.36 173.36 286.8 229.79 329.2 229.79 254.36 99.59 105 359.38 333.5 359.38 312.21 322.35 168.69 322.35" />
            </svg>
          </Link>
          <NavBar
            links={navLinks}
            LinkElementType={GatsbyLink}
            location={location}
          />
          {/* {gallery.slideIndex === undefined && !fullscreen && (
            <Link
              className="header__slide-title h4 display-none margin-bottom-none"
              ElementType={GatsbyLink}
              to={`/${category}`}
              unstyled
            >
              {titleCase(category)}
            </Link>
          )}
          {gallery.slideIndex !== undefined && (
            <div
              className="header__slide-buttons display-none"
              style={{ marginLeft: '-8px' }}
            >
              <button
                aria-label="Previous Slide"
                onClick={() => gallery.setSlideIndex(gallery.slideIndex - 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48px"
                  height="48px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
                </svg>
              </button>
              <button
                aria-label="Next Slide"
                className="margin-left-md"
                onClick={() => gallery.setSlideIndex(gallery.slideIndex + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48px"
                  height="48px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </svg>
              </button>
            </div>
          )} */}
        </div>
        <div>
          <SocialNavLinks
            className="margin-left-md margin-right-xl"
            iconSize={20}
            iconInnerPadding={10}
            links={socialLinks}
          />
          <button
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="header__menu-button"
            onClick={toggleMenu}
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
      </div>
    </header>
  );
};

Header.propType = {
  location: PropTypes.object,
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default Header;
