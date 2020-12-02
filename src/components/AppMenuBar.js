import {
  ClickableDiv,
  NavBar,
  SocialNavLinks,
} from '@zigurous/react-components';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import routes from '../routes';
import socials from '../socials';
import '../styles/app-menu-bar.css';

const AppMenuBar = () => {
  const history = useHistory();
  return (
    <div className="app-menu-bar" theme="dark">
      <div className="app-menu-bar__content">
        <ClickableDiv
          className="h5 font-weight-semibold margin-none"
          onClick={() => {
            history.push('/');
          }}
        >
          Adam Graham
        </ClickableDiv>
        <NavBar
          NavLink={NavLink}
          routes={Object.values(routes).filter(
            (route) => !route.excludeFromNavBar
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
    </div>
  );
};

export default AppMenuBar;
