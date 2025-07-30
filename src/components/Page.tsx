import { type LinkType, useMediaQuery, useTheme } from '@zigurous/forge-react';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import Dock from './Dock';
import Header from './Header';

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
  dockLinks?: LinkType[];
  hideDock?: boolean;
  hideHeader?: boolean;
  id?: string;
  location: Location;
  title?: string;
}

export default function Page({
  children,
  className,
  dockLinks,
  hideDock = false,
  hideHeader = false,
  id,
  location,
  title,
}: PageProps) {
  const [theme, _, toggleTheme] = useTheme('light');
  const print = useMediaQuery('print', false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (print) {
        document.body.setAttribute('data-theme', 'light');
      } else {
        document.body.setAttribute('data-theme', theme);
      }
    }
  }, [theme, print]);

  return (
    <div className="app">
      {!hideHeader && <Header location={location} pageTitle={title} />}
      <main className={classNames('page', className)} id={id}>
        {children}
      </main>
      {!hideDock && !print && (
        <Dock
          theme={theme}
          toggleTheme={toggleTheme}
          secondaryLinks={dockLinks}
        />
      )}
    </div>
  );
}
