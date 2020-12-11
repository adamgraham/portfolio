import {
  ClickableDiv,
  NavBar,
  SocialNavLinks,
  withTransition,
} from '@zigurous/react-components';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import routes from '../routes';
import socials from '../socials';
import '../styles/menu-bar.css';

const MenuBar = ({ className, hidden = false }) => {
  const history = useHistory();
  return (
    <header className={classNames('app-menu-bar', className)}>
      <div className="app-menu-bar__content">
        <ClickableDiv
          className="logo h5 font-weight-semibold margin-none"
          onClick={() => {
            history.push('/');
          }}
        >
          Adam Graham
        </ClickableDiv>
        <NavBar
          NavLink={NavLink}
          routes={Object.values(routes).filter(
            (route) => route.includeInNavBar
          )}
        />
      </div>
      <div className="app-menu-bar__content">
        <SocialNavLinks
          className="margin-left-md"
          iconSize={24}
          iconInnerPadding={12}
          links={Object.values(socials)}
        />
      </div>
    </header>
  );
};

MenuBar.propTypes = {
  className: PropTypes.string,
  hidden: PropTypes.bool,
};

export default withTransition(MenuBar, 'translate-down', 'hidden');
