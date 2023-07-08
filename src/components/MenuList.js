import { Link } from '@zigurous/react-components';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { navLinks } from '../links';

const MenuList = ({ onLink, open }) => {
  return (
    <div
      aria-hidden={!open}
      className={classNames('app-menu__menu-view', { open: open })}
    >
      <ul className="app-menu__nav-list">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              activeClassName=""
              aria-disabled={!open}
              aria-label={link.name}
              disabled={!open}
              ElementType={link.ElementType || GatsbyLink}
              external={link.external}
              onClick={onLink}
              tabIndex={open ? 0 : -1}
              to={link.to}
              unstyled
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MenuList.propTypes = {
  onLink: PropTypes.func,
  open: PropTypes.bool,
};

export default MenuList;
