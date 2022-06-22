import {
  Link,
  NavBar,
  ProgressiveImage,
  SocialNavLinks,
  useModalOverlay,
} from '@zigurous/react-components';
import classNames from 'classnames';
import { Link as GatsbyLink, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { SlideProps } from './slide';
import chevronLeftIcon from '../images/icons/chevron-left.svg';
import chevronRightIcon from '../images/icons/chevron-right.svg';
import galleryOpenIcon from '../images/icons/fullscreen-exit.svg';
import galleryIcon from '../images/icons/fullscreen.svg';
import menuOpenIcon from '../images/icons/menu-open.svg';
import menuIcon from '../images/icons/menu.svg';
import { titleCase } from '../formatting';
import { setSessionIndex } from '../session';
import { navLinks, socialLinks } from '../links';
import '../styles/menu.css';

const Menu = ({
  category,
  className,
  gallery = [],
  location,
  setSlideIndex = () => {},
  slideIndex,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const fullscreen = showMenu || showGallery;
  useModalOverlay(fullscreen, true);
  return (
    <div
      className={classNames(
        'app-menu',
        { 'app-menu--fullscreen': fullscreen },
        className
      )}
    >
      <div className="app-menu__container">
        <header className="app-menu__header">
          <div>
            <Link className="logo h4" ElementType={GatsbyLink} to="/" unstyled>
              Adam Graham
            </Link>
            {slideIndex === undefined && !fullscreen && (
              <Link
                className="app-menu__page-title h4 display-none margin-bottom-none"
                ElementType={GatsbyLink}
                to={`/${category}`}
                unstyled
              >
                {titleCase(category)}
              </Link>
            )}
            {slideIndex !== undefined && (
              <div
                className="app-menu__slide-buttons display-none"
                style={{ marginLeft: '-8px' }}
              >
                <button
                  aria-label="Previous Slide"
                  disabled={slideIndex <= 0}
                  onClick={() => {
                    const previousIndex = Math.max(slideIndex - 1, 0);
                    setSlideIndex(previousIndex);
                  }}
                >
                  <img alt="" src={chevronLeftIcon} />
                </button>
                <button
                  aria-label="Next Slide"
                  className="margin-left-md"
                  disabled={slideIndex >= gallery.length - 1}
                  onClick={() => {
                    const nextIndex = Math.min(
                      slideIndex + 1,
                      gallery.length - 1
                    );
                    setSlideIndex(nextIndex);
                  }}
                >
                  <img alt="" src={chevronRightIcon} />
                </button>
              </div>
            )}
            <NavBar
              links={navLinks}
              LinkElementType={GatsbyLink}
              location={location}
            />
          </div>
          <div>
            <SocialNavLinks
              className="margin-left-md margin-right-md"
              iconSize={20}
              iconInnerPadding={10}
              links={socialLinks}
            />
            <button
              aria-label={showGallery ? 'Hide Gallery' : 'Show Gallery'}
              className="app-menu__gallery-button margin-left-xl"
              onClick={() => {
                setShowGallery(!showGallery);
                setShowMenu(false);
              }}
            >
              <img alt="" src={showGallery ? galleryOpenIcon : galleryIcon} />
            </button>
            <button
              aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
              className="app-menu__menu-button margin-left-xl"
              onClick={() => {
                setShowMenu(!showMenu);
                setShowGallery(false);
              }}
            >
              <img alt="" src={showMenu ? menuOpenIcon : menuIcon} />
            </button>
          </div>
        </header>
        <div aria-hidden={!fullscreen} className="app-menu__body">
          <div
            aria-hidden={!showMenu}
            className={classNames('app-menu__menu-view', { open: showMenu })}
          >
            <ul className="app-menu__nav-list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    activeClassName=""
                    aria-disabled={!showMenu}
                    aria-label={link.name}
                    disabled={!showMenu}
                    ElementType={link.ElementType || GatsbyLink}
                    external={link.external}
                    onClick={() => setShowMenu(false)}
                    tabIndex={fullscreen ? 0 : -1}
                    to={link.to}
                    unstyled
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden={!showGallery}
            className={classNames('app-menu__gallery-view', {
              open: showGallery,
            })}
          >
            <div className="app-menu__gallery">
              {gallery.map((slide, index) => (
                <button
                  aria-disabled={!showGallery}
                  aria-label={slide.title}
                  className="app-menu__thumbnail"
                  disabled={!showGallery}
                  key={slide.id}
                  onClick={() => {
                    setShowGallery(false);
                    setSessionIndex(slide.category, index);
                    setSlideIndex(index);
                    navigate(`/${slide.category}`);
                  }}
                >
                  <ProgressiveImage
                    alt={slide.imageAltText || ''}
                    className={classNames('app-menu__thumbnail-image', {
                      [`app-menu__thumbnail-image--border-${slide.imageBorder}`]:
                        slide.imageBorder,
                    })}
                    imageProps={{
                      importance: 'low',
                      loading: 'lazy',
                    }}
                    width={slide.image.sharp.original.width}
                    height={slide.image.sharp.original.height}
                    src={slide.image.sharp.original.src}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
  gallery: PropTypes.arrayOf(SlideProps),
  location: PropTypes.object,
  setSlideIndex: PropTypes.func,
  slideIndex: PropTypes.number,
};

export default Menu;
