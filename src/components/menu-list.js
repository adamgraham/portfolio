import { Link } from '@zigurous/react-components';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { navLinks } from '../links';

const MenuList = ({ onLink = () => {}, show }) => {
  return (
    <div
      aria-hidden={!show}
      className={classNames('app-menu__menu-view', { open: show })}
    >
      <ul className="app-menu__nav-list">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              activeClassName=""
              aria-disabled={!show}
              aria-label={link.name}
              disabled={!show}
              ElementType={link.ElementType || GatsbyLink}
              external={link.external}
              onClick={onLink}
              tabIndex={show ? 0 : -1}
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
  show: PropTypes.bool,
};

export default MenuList;
