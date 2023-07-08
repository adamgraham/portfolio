import { useModalOverlay } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import MenuBar from './menu-bar';
import MenuGallery from './menu-gallery';
import MenuList from './menu-list';
import { MENU_TYPE_GALLERY, MENU_TYPE_LIST, MENU_TYPE_NONE } from './menu-type';
import '../styles/menu.css';

const Menu = ({ location }) => {
  const [menuType, setMenuType] = useState(MENU_TYPE_NONE);
  const fullscreen = menuType !== MENU_TYPE_NONE;
  const listOpen = menuType === MENU_TYPE_LIST;
  const galleryOpen = menuType === MENU_TYPE_GALLERY;

  const closeMenu = useCallback(() => {
    setMenuType(MENU_TYPE_NONE);
  }, []);

  useModalOverlay(fullscreen, true);

  return (
    <div
      className={classNames('app-menu', { 'app-menu--fullscreen': fullscreen })}
    >
      <div className="app-menu__container">
        <MenuBar
          location={location}
          menuType={menuType}
          setMenuType={setMenuType}
        />
        <div className="app-menu__body">
          <MenuList onLink={closeMenu} open={listOpen} />
          <MenuGallery onSelect={closeMenu} open={galleryOpen} />
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  location: PropTypes.object,
};

export default Menu;
