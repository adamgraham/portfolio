import { Link, NavBar, SocialNavLinks } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import GalleryContext from './GalleryContext';
import icons from '../icons';
import { navLinks, socialLinks } from '../links';
import { MENU_TYPE_GALLERY, MENU_TYPE_LIST, MENU_TYPE_NONE } from '../types/menu'; // prettier-ignore
import { titleCase } from '../utils/formatting';

const MenuBar = ({ location, menuType, setMenuType }) => {
  const context = useContext(GalleryContext);
  const showMenu = menuType === MENU_TYPE_LIST;
  const showGallery = menuType === MENU_TYPE_GALLERY;
  return (
    <header className="app-menu__header">
      <div>
        <Link className="logo h4" ElementType={GatsbyLink} to="/" unstyled>
          Adam Graham
        </Link>
        {context.slideIndex === undefined && !fullscreen && (
          <Link
            className="app-menu__page-title h4 display-none margin-bottom-none"
            ElementType={GatsbyLink}
            to={`/${category}`}
            unstyled
          >
            {titleCase(category)}
          </Link>
        )}
        {context.slideIndex !== undefined && (
          <div
            className="app-menu__slide-buttons display-none"
            style={{ marginLeft: '-8px' }}
          >
            <button
              aria-label="Previous Slide"
              disabled={context.slideIndex <= 0}
              onClick={() => context.setSlideIndex(context.slideIndex - 1)}
            >
              <img alt="" src={icons.chevronLeft} />
            </button>
            <button
              aria-label="Next Slide"
              className="margin-left-md"
              disabled={context.slideIndex >= context.gallery.length - 1}
              onClick={() => context.setSlideIndex(context.slideIndex + 1)}
            >
              <img alt="" src={icons.chevronRight} />
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
          onClick={() =>
            setMenuType(showGallery ? MENU_TYPE_NONE : MENU_TYPE_GALLERY)
          }
        >
          <img alt="" src={showGallery ? icons.galleryOpen : icons.gallery} />
        </button>
        <button
          aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
          className="app-menu__menu-button margin-left-xl"
          onClick={() =>
            setMenuType(showMenu ? MENU_TYPE_NONE : MENU_TYPE_LIST)
          }
        >
          <img alt="" src={showMenu ? icons.menuOpen : icons.menu} />
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
