import {
  ImageFadeIn,
  NavBar,
  SocialNavLinks,
  useFullscreenMenu,
  withTransition,
} from '@zigurous/react-components';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getData } from '../data';
import galleryOpenIcon from '../images/icons/fullscreen_exit-black-36dp.svg';
import galleryIcon from '../images/icons/fullscreen-black-36dp.svg';
import menuOpenIcon from '../images/icons/menu_open-black-36dp.svg';
import menuIcon from '../images/icons/menu-black-36dp.svg';
import routes from '../routes';
import socials from '../socials';
import '../styles/menu.css';

const Menu = ({ className, hidden = false }) => {
  const history = useHistory();
  const [fullscreen, setFullscreen] = useFullscreenMenu(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    setFullscreen(false);
    setShowMenu(false);
    setShowGallery(false);
    setTimeout(() => {
      setGalleryData(getData(history.location.pathname));
    }, 400);
  }, [hidden, history.location, setFullscreen]);

  useEffect(() => {
    setFullscreen(showMenu || showGallery);
  }, [setFullscreen, showGallery, showMenu]);

  return (
    <div
      aria-hidden={hidden}
      className={classNames(
        'app-menu',
        { 'app-menu--fullscreen': fullscreen },
        className
      )}
    >
      <div className="app-menu__container">
        <header className="app-menu__header">
          <div className="app-menu__header-left">
            <button
              className="logo h5"
              onClick={() => {
                history.push('/');
              }}
            >
              Adam Graham
            </button>
            <NavBar
              NavLink={NavLink}
              routes={Object.values(routes).filter(
                (route) => route.includeInNavBar
              )}
            />
          </div>
          <div className="app-menu__header-right">
            <SocialNavLinks
              className="margin-left-md"
              iconSize={24}
              iconInnerPadding={12}
              links={Object.values(socials)}
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
            <div className="app-menu__nav-list">
              <ul>
                {Object.values(routes)
                  .filter((route) => route.includeInNavBar)
                  .map((route, index) => (
                    <li key={route.path}>
                      <NavLink
                        activeClassName="selected"
                        aria-disabled={!showMenu}
                        disabled={!showMenu}
                        exact={Boolean(route.exact)}
                        strict={Boolean(route.strict)}
                        tabIndex={fullscreen ? 0 : -1}
                        to={route.path}
                      >
                        <b>{route.name}</b>
                      </NavLink>
                      <span aria-hidden className="margin-left-md body-xs">
                        0{index + 1}.
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div
            aria-hidden={!showGallery}
            className={classNames('app-menu__gallery-view', {
              open: showGallery,
            })}
          >
            <div className="app-menu__gallery">
              {galleryData.map((item) => (
                <button
                  aria-disabled={!showGallery}
                  aria-label={item.title}
                  className="app-menu__thumbnail"
                  disabled={!showGallery}
                  key={item.id}
                  onClick={() => {
                    history.push(`${history.location.pathname}#${item.id}`);
                  }}
                >
                  <ImageFadeIn
                    alt={item.altText || ''}
                    className={classNames(
                      'app-menu__thumbnail-image',
                      {
                        'app-menu__thumbnail-image--border-white': !item.imageBorder,
                        [`app-menu__thumbnail-image--border-${item.imageBorder}`]: item.imageBorder,
                      },
                      'box-shadow-1'
                    )}
                    src={item.image}
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
  className: PropTypes.string,
  hidden: PropTypes.bool,
};

export default withTransition(Menu, 'translate-down', 'hidden');
