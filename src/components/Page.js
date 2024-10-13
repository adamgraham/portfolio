import { useTheme } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Dock from './Dock';
import Header from './Header';
import Metadata from './Metadata';

const Page = ({
  children,
  className,
  dockLinks,
  hideDock = false,
  hideHeader = false,
  id,
  location,
  metadata,
  title,
}) => {
  const [theme, _, toggleTheme] = useTheme('light');
  return (
    <div className="app" data-theme={theme}>
      <Metadata {...metadata} />
      {!hideHeader && <Header location={location} pageTitle={title} />}
      <main className={classNames('page', className)} id={id}>
        {children}
      </main>
      {!hideDock && (
        <Dock
          theme={theme}
          toggleTheme={toggleTheme}
          secondaryLinks={dockLinks}
        />
      )}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideDock: PropTypes.bool,
  hideHeader: PropTypes.bool,
  id: PropTypes.string,
  location: PropTypes.object,
  metadata: PropTypes.object,
  title: PropTypes.string,
};

export default Page;
