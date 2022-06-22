import { useModalOverlay } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import MenuBar from './menu-bar';
import MenuGallery from './menu-gallery';
import MenuList from './menu-list';
import '../styles/menu.css';

const Menu = ({ location }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const fullscreen = showMenu || showGallery;
  useModalOverlay(fullscreen, true);

  const onToggleGallery = useCallback((toggle) => {
    setShowGallery(!toggle);
    setShowMenu(false);
  }, []);

  const onToggleMenu = useCallback((toggle) => {
    setShowMenu(!toggle);
    setShowGallery(false);
  }, []);

  const onGallerySelect = useCallback(() => {
    setShowGallery(false);
  }, []);

  const onMenuLink = useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <div
      className={classNames('app-menu', { 'app-menu--fullscreen': fullscreen })}
    >
      <div className="app-menu__container">
        <MenuBar
          location={location}
          onToggleGallery={onToggleGallery}
          onToggleMenu={onToggleMenu}
          showGallery={showGallery}
          showMenu={showMenu}
        />
        <div aria-hidden={!fullscreen} className="app-menu__body">
          <MenuList onLink={onMenuLink} show={showMenu} />
          <MenuGallery onSelect={onGallerySelect} show={showGallery} />
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  location: PropTypes.object,
};

export default Menu;
