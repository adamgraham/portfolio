import { type LinkType, useTheme } from '@zigurous/forge-react';
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

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app">
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
}
