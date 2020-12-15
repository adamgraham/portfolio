import {
  ImageFadeIn,
  NavBar,
  SocialNavLinks,
  withTransition,
} from '@zigurous/react-components';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getData } from '../data';
import routes from '../routes';
import socials from '../socials';
import '../styles/menu.css';

const Menu = ({ className, hidden = false }) => {
  const history = useHistory();
  const [showGallery, setShowGallery] = useState(false);
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    setShowGallery(false);
  }, [hidden, history.location]);

  return (
    <div
      className={classNames(
        'app-menu',
        { 'app-menu--gallery-view': showGallery },
        className
      )}
    >
      <div className="app-menu__container">
        <header className="app-menu__header" aria-disabled={hidden}>
          <div className="app-menu__navigation">
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
          <div className="app-menu__social">
            <SocialNavLinks
              className="margin-left-md"
              iconSize={24}
              iconInnerPadding={12}
              links={Object.values(socials)}
            />
            <button
              aria-label={showGallery ? 'Hide Gallery' : 'Show Gallery'}
              className="margin-left-xxxl"
              onClick={() => {
                setShowGallery(!showGallery);
                setTimeout(() => {
                  if (!showGallery) {
                    setGalleryData(getData(history.location.pathname));
                  }
                }, 400);
              }}
            >
              {showGallery ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="36px"
                  height="36px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="36px"
                  height="36px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              )}
            </button>
          </div>
        </header>
        <div className="app-menu__gallery">
          <div className="app-menu__thumbnails">
            {galleryData.map((item) => (
              <button
                aria-hidden={hidden || !showGallery}
                aria-label={item.title}
                className="app-menu__thumbnail"
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
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  hidden: PropTypes.bool,
};

export default withTransition(Menu, 'translate-down', 'hidden');