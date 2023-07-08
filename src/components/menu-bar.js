import { Link, NavBar, SocialNavLinks } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { MENU_TYPE_GALLERY, MENU_TYPE_LIST, MENU_TYPE_NONE } from './menu-type';
import chevronLeftIcon from '../images/icons/chevron-left.svg';
import chevronRightIcon from '../images/icons/chevron-right.svg';
import galleryOpenIcon from '../images/icons/fullscreen-exit.svg';
import galleryIcon from '../images/icons/fullscreen.svg';
import menuOpenIcon from '../images/icons/menu-open.svg';
import menuIcon from '../images/icons/menu.svg';
import { GalleryContext } from '../context';
import { titleCase } from '../formatting';
import { navLinks, socialLinks } from '../links';

const MenuBar = ({ location, menuType, setMenuType }) => {
  const showMenu = menuType === MENU_TYPE_LIST;
  const showGallery = menuType === MENU_TYPE_GALLERY;
  return (
    <header className="app-menu__header">
      <GalleryContext.Consumer>
        {({ gallery, slideIndex, setSlideIndex }) => (
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
                  onClick={() => setSlideIndex(slideIndex - 1)}
                >
                  <img alt="" src={chevronLeftIcon} />
                </button>
                <button
                  aria-label="Next Slide"
                  className="margin-left-md"
                  disabled={slideIndex >= gallery.length - 1}
                  onClick={() => setSlideIndex(slideIndex + 1)}
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
        )}
      </GalleryContext.Consumer>
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
          onClick={() =>
            setMenuType(showGallery ? MENU_TYPE_NONE : MENU_TYPE_GALLERY)
          }
        >
          <img alt="" src={showGallery ? galleryOpenIcon : galleryIcon} />
        </button>
        <button
          aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
          className="app-menu__menu-button margin-left-xl"
          onClick={() =>
            setMenuType(showMenu ? MENU_TYPE_NONE : MENU_TYPE_LIST)
          }
        >
          <img alt="" src={showMenu ? menuOpenIcon : menuIcon} />
        </button>
      </div>
    </header>
  );
};

MenuBar.propTypes = {
  location: PropTypes.object,
  menuType: PropTypes.oneOf([
    MENU_TYPE_NONE,
    MENU_TYPE_LIST,
    MENU_TYPE_GALLERY,
  ]),
  setMenuType: PropTypes.func,
};

export default MenuBar;
